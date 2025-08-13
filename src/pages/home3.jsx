import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { allCountries } from 'country-telephone-data';
import '../assets/scss/waitlist3.scss';
import { Link } from 'react-router-dom';

const apiUrl = 'https://myapi.myarcfunding.com/api/v1/';

const customStyles = {
    control: (base) => ({
        ...base,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        border: '2px solid rgba(138, 43, 226, 0.3)',
        padding: '8px',
        color: 'white',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        width: '100%',
        minHeight: '58px',
        '&:hover': {
            borderColor: '#9c27b0',
        },
        '&:focus': {
            borderColor: '#9c27b0',
            backgroundColor: 'rgba(138, 43, 226, 0.2)',
            boxShadow: '0 0 20px rgba(156, 39, 176, 0.4)',
        },
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '12px',
        padding: '8px',
        width: '100%',
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? 'rgba(138, 43, 226, 0.2)' : 'transparent',
        color: 'white',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'rgba(138, 43, 226, 0.3)',
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: 'white',
    }),
    placeholder: (base) => ({
        ...base,
        color: 'rgba(255, 255, 255, 0.6)',
        position: 'absolute',
        left: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
    }),
    valueContainer: (base) => ({
        ...base,
        padding: '2px 8px',
        color: 'white',
    }),
    input: (base) => ({
        ...base,
        margin: '0',
        padding: '0',
        color: 'white',
    }),
};

const experienceOptions = [
    { value: 'less_than_1', label: 'Lesser than 1 year' },
    { value: '1_to_3', label: '1-3 years' },
    { value: 'above_3', label: 'Above 3 years' },
];

const initialCountdown = 5325120000; // 61d 15h 12m in ms

function pad(n) {
    return String(n).padStart(2, '0');
}

const Home3 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: null,
        country: null,
        countryCode: '',
    });
    const [toastMsg, setToastMsg] = useState('');
    const [countdown, setCountdown] = useState({
        days: '--',
        hours: '--',
        mins: '--',
        relative: '61d 15h 12m',
    });
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);
    const [joinedNumbers, setJoinedNumbers] = useState(114);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        // Countries dropdown
        const formatted = allCountries.map(c => ({
            value: c.name,
            label: c.name,
            flag: `https://flagcdn.com/48x36/${c.iso2.toLowerCase()}.png`,
        })).filter(c => c.value);
        formatted.sort((a, b) => a.label.localeCompare(b.label));
        setCountries(formatted);

        // API call for joined numbers
        callApi();
        callApi2()

        // Countdown

    }, []);

    const callApi2 = async () => {
        try {
            const response = await axios.get(`${apiUrl}users/launch-date`);

            if (response.data.success) {
          
                let newLaunchdate = response.data.data
                const end = newLaunchdate;
                function updateCountdown() {
                    const now = Date.now();
                    let diff = end - now;
                    if (diff <= 0) {
                        setCountdown({
                            days: '00',
                            hours: '00',
                            mins: '00',
                            relative: 'Offer ended',
                        });
                        return;
                    }
                    const sec = Math.floor(diff / 1000);
                    const days = Math.floor(sec / 86400);
                    const hours = Math.floor((sec % 86400) / 3600);
                    const mins = Math.floor((sec % 3600) / 60);
                    setCountdown({
                        days: pad(days),
                        hours: pad(hours),
                        mins: pad(mins),
                        relative: `${days} Days ${hours} Hours ${mins} Minutes`,
                    });
                }
                updateCountdown();
                const timer = setInterval(updateCountdown, 60000);
                return () => clearInterval(timer);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Failed to fetch launch date.");
        }
    };

    const callApi = async () => {
        try {
            const response = await axios.get(`${apiUrl}users/members`);
            if (response.data.success) {
                setJoinedNumbers(response.data.data.count);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Failed to fetch members count.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSelectChange = (field, value) => {
        setFormData(prev => {
            const newState = { ...prev, [field]: value };
            if (field === 'country') {
                const countryCode = allCountries.find(c => c.name === value?.label)?.dialCode || '';
                newState.countryCode = countryCode ? `+${countryCode}` : '';
            }
            return newState;
        });
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'First Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.experience) newErrors.experience = 'Experience is required';
        if (!formData.country) newErrors.country = 'Country is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        // Prepare payload
        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            experience: formData.experience?.label,
            country: formData.country?.label,
        };

        try {
            const response = await axios.post(`${apiUrl}users/waitlist`, payload);
            if (response.data.success) {
                toast.success("Successfully joined the waitlist!");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    experience: null,
                    country: null,
                    countryCode: '',
                });
                setSuccess(true);
                setLoading(false);
                setTimeout(() => {
                    window.location.reload();
                }, 30000);
            } else {
                toast.error(response.data.message);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

    const formatOptionLabel = ({ label, flag }) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={flag} alt={label} style={{ width: '24px', height: '18px' }} />
            <span>{label}</span>
        </div>
    );

    return (
        <div className="container" role="main">
            <ToastContainer />
            <section className="hero" aria-label="ARC Funding hero">
                <div className="hero-left">
                    <span className="kicker" aria-hidden="true">Early Access • Waitlist</span>
                    <h1>
                        Claim Your <span className="gradient-text">20% Early Access Discount</span>
                        <br />
                        <small className="subtitle">Limited to Waitlist Traders Only!</small>
                    </h1>
                    <p className="lead">
                        Be among the first to access ARC Funding accounts when we launch. Get funded instantly, scale fast, and keep up to <strong>90% of your profits</strong>.
                    </p>
                    <div className="features" aria-hidden="false">
                        <div className="feature">
                            <h4>Instant Funding Options</h4>
                            <p style={{ color: "black" }}>No long evaluation phases — start trading and earning immediately.</p>
                        </div>
                        <div className="feature">
                            <h4>High Payouts</h4>
                            <p style={{ color: "black" }}>Keep up to 90% of your profits — trade your style, keep your edge.</p>
                        </div>
                        <div className="feature">
                            <h4>Scale Up to $300K</h4>
                            <p style={{ color: "black" }}>Seamless capital scaling for top-performing traders.</p>
                        </div>
                        <div className="feature">
                            <h4>Trader-Friendly Rules</h4>
                            <p style={{ color: "black" }}>Transparent, minimal restrictions designed for real traders.</p>
                        </div>
                    </div>
                    <div className="fomo" style={{ marginTop: 16 }}>
                        <div>
                            <div style={{ fontWeight: 700 }}>Spots Are Limited</div>
                            <small>Our early access waitlist is capped. Once it’s full, the 20% discount is gone forever.</small>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <div className="countdown" aria-live="polite" aria-atomic="true">
                                <div className="unit">{countdown.days}<div className="unit-label">Days</div></div>
                                <div className="unit">{countdown.hours}<div className="unit-label">Hours</div></div>
                                <div className="unit">{countdown.mins}<div className="unit-label">Minutes</div></div>
                            </div>
                            <small style={{ marginTop: 6, color: 'var(--muted)' }}>Offer Ends in <strong>{countdown.relative}</strong></small>
                        </div>
                    </div>
                </div>
                <aside className="waitlist-card" aria-label="Join waitlist">
                    <h3 style={{ margin: '0 0 8px 0' }}>Join the Waitlist & Claim 20% Off</h3>
                    <p className="small-muted" style={{ margin: '0 0 12px 0' }}>
                        Be first in line — instant funding options and priority account selection for waitlist members.
                    </p>
                    {!success ? (
                        <form className="row" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" placeholder="Your first name" required value={formData.name} onChange={handleInputChange} />
                                {errors.name && <div className="error">{errors.name}</div>}
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input id="email" name="email" type="email" placeholder="you@domain.com" required value={formData.email} onChange={handleInputChange} />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="phone">Phone number <small className="muted">(optional)</small></label>
                                <input id="phone" name="phone" type="tel" placeholder="+60 12 345 6789" value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <div className="grid-2">
                                <div>
                                    <label htmlFor="experience">Trading Experience</label>
                                    <Select
                                        id="experience"
                                        name="experience"
                                        options={experienceOptions}
                                        styles={customStyles}
                                        placeholder="Experience"
                                        value={formData.experience}
                                        onChange={selected => handleSelectChange('experience', selected)}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                    />
                                    {errors.experience && <div className="error">{errors.experience}</div>}
                                </div>
                                <div>
                                    <label htmlFor="country">Country</label>
                                    <Select
                                        id="country"
                                        name="country"
                                        options={countries}
                                        styles={customStyles}
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={selected => handleSelectChange('country', selected)}
                                        formatOptionLabel={formatOptionLabel}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                    />
                                    {errors.country && <div className="error">{errors.country}</div>}
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, marginTop: 6, flexWrap: 'wrap' }}>
                                <button className="btn" type="submit" disabled={success || loading}>
                                    {loading ? 'Loading...' : (success ? 'Added — Check email' : 'Join the Waitlist & Claim My 20% Off')}
                                </button>
                            </div>
                            <div className="muted-note">💰 Instant Funding Available | 📈 Up to $300K Accounts | 🏆 Top Trader Support</div>
                            <div className="small-muted" style={{ marginTop: 8 }}>
                                By joining you agree to receive email updates. We never share your data. — <Link to="/privacy-policy" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Privacy</Link>
                            </div>
                        </form>
                    ) : (
                        <div className="success-message">
                            Welcome to Arc Funding
                            please check your email inbox.
                            <div className="success-message-link">
                                <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                    👉 Don’t forget to check your spam or promotions folder just in case!
                                </a>
                            </div>
                        </div>
                    )}
                </aside>
            </section>
            <section className="how" aria-label="How ARC Funding works">
                <div className="how-steps" aria-hidden="false">
                    <h3 style={{ marginTop: 0, fontSize: '20px' }}>How It Works</h3>
                    <ol>
                        <li><strong>Join the Waitlist Today</strong> — It's free and takes ~10 seconds.</li>
                        <li><strong>Receive Exclusive Updates</strong> — Priority access, launch offers, account selection.</li>
                        <li><strong>Get Your Account at 20% Off</strong> — Trade instantly when we go live and keep up to 90% of profits.</li>
                    </ol>
                </div>
            </section>
            <div className="final-cta" aria-hidden="false">
                <div className="card">
                    <h4 style={{ margin: '0 0 8px 0' }}>Don't Miss Out on Your Advantage</h4>
                    <p className="small-muted" style={{ margin: '0 0 12px 0' }}>
                        When ARC Funding launches, waitlist traders will get first choice of accounts, instant funding, and the only 20% discount we’ll ever offer.
                    </p>
                    <Link to="/terms-of-use" className="btn" type="button">
                        Learn More
                    </Link>
                </div>
            </div>
            <div style={{ fontSize: 13, color: "black" }}>
                <strong>Top features:</strong>
                <ul style={{ margin: '8px 0 0 18px', padding: 0, color: "black" }}>
                    <li>Fast account activation</li>
                    <li>Competitive scaling rules</li>
                    <li>Dedicated trader support</li>
                </ul>
            </div>
            <footer>
                ©️ {new Date().getFullYear()} ARC Funding. All rights reserved. | <span className="small-muted">Offer limited to waitlist traders only. Terms apply.</span>
            </footer>

        </div>
    );
};

export default Home3;