import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { allCountries } from 'country-telephone-data';
import '../assets/scss/waitlist.scss';
import { Link } from 'react-router-dom';

const apiUrl = 'https://myapi.myarcfunding.com/api/v1/'; // Replace with your actual API base URL

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
        width: '100%', // Ensure full width
        minHeight: '58px', // Match the height of input fields
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
        width: '100%', // Ensure the menu is as wide as the control
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
        left: '12px', // Align with input fields
        top: '50%',
        transform: 'translateY(-50%)',
    }),

    valueContainer: (base) => ({
        ...base,
        padding: '2px 8px', // Adjust padding for better alignment
         color: 'white',
    }),

    input: (base) => ({
        ...base,
        margin: '0',
        padding: '0',
         color: 'white',
    }),
};

const WaitlistPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '',
        experience: null,
        country: null,
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);
    const [joinedNumbers,setJoinedNumbers] = useState(114);

    const [loading,setLoading] = useState(false);
    const experienceOptions = [
        { value: 'less_than_1', label: 'Lesser than 1 year' },
        { value: '1_to_3', label: '1-3 years' },
        { value: 'above_3', label: 'Above 3 years' },
    ];

    useEffect(() => {
        const formatted = allCountries.map(c => ({
            value: c.name,
            label: c.name,
            flag: `https://flagcdn.com/48x36/${c.iso2.toLowerCase()}.png`,
        })).filter(c => c.value);

        formatted.sort((a, b) => a.label.localeCompare(b.label));
        setCountries(formatted);

const starttime = 1754392522; // your fixed start timestamp (in seconds)
const endtime = Math.floor(Date.now() / 1000); // current timestamp in seconds

// Calculate how many 30-minute intervals have passed
const intervals = Math.floor((endtime - starttime) / (30 * 60)); // 30 mins = 1800 seconds

// Set the new joined numbers
//setJoinedNumbers(joinedNumbers + intervals * 30);

callApi()
    }, []);

    const callApi = async () => {
        try {
            const response = await axios.get(`${apiUrl}users/members`);
            if (response.data.success) {
                console.log(response.data.data.count);
                setJoinedNumbers(response.data.data.count);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching members count:", error);
            toast.error("Failed to fetch members count.");
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
        setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const handleChange = (field, value) => {
        // setFormData(prev => ({ ...prev, [field]: value }));
        setFormData(prev => {
            const newState = { ...prev, [field]: value };
            if (field === 'country') {
                const countryCode = allCountries.find(c => c.name === value.label)?.dialCode || '';
                newState.countryCode = countryCode ? `+${countryCode}` : '';
            } else if (field === 'phone') {
                // Set default country to Malaysia and code when phone number is entered
                const malaysia = allCountries.find(c => c.name === 'Malaysia');
                if (malaysia) {
                    newState.country = malaysia;
                    newState.countryCode = malaysia.dialCode ? `+${malaysia.dialCode}` : '';
                }
            }
            return newState;
        });
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {

        formData.country = formData?.country?.value;
        formData.experience = formData?.experience?.label;
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Full Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        //if (!formData.country) newErrors.country = 'Country is required';
        //if (!formData.experience) newErrors.experience = 'Experience is required';

        // Add other validations as needed
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
setLoading(true)
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            setLoading(false)
            return;
        }


        try {
            const response = await axios.post(`${apiUrl}users/waitlist`, formData);
            if (response.data.success) {
                toast.success("Successfully joined the waitlist!");
                // setShowSuccess(true);
                // Reset form after delay
                // setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    experience: '',
                    country: null,
                });
                //   setShowSuccess(false);
                // }, 5000);
                setShowSuccess(true);
                setLoading(false)
            }else{
                toast.error(response.data.message);
                setLoading(false)

            }
        } catch (error) {
            setLoading(false)
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
        <div className="container">
            <ToastContainer />
            <div className="background-elements">
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>
            </div>

            <div className="main-content">
                <div className="logo">
                    <img src='/images/logo.png' alt="ARC Funding" />
                    {/* <h1>ARC</h1> */}
                    {/* <div className="subtitle">FUNDING</div> */}
                </div>

                <div className="early-access-badge">🚀 Early Access</div>

                <h2 className="headline">Unlock Your Edge. Trade with Confidence. Scale Without Limits.</h2>
                <p className="description">At Arc Funding, we empower traders with up to $300,000 in trading capital, providing the tools, backing, and professional support to help you thrive in the markets.</p>

                <div className="features">
                    <div className="feature">
                        <div className="feature-icon">💰</div>
                        <div className="feature-title">Up to $300K</div>
                        <div className="feature-desc">Funding Available</div>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">⚡</div>
                        <div className="feature-title">90% Profit</div>
                        <div className="feature-desc">Split for Traders</div>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">🔄</div>
                        <div className="feature-title">No Time Limits</div>
                        <div className="feature-desc">Trade at Your Pace</div>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">📈</div>
                        <div className="feature-title">Biweekly Withdrawals</div>
                        <div className="feature-desc">Fast & Reliable</div>
                    </div>
                </div>

                {!showSuccess ? (
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" className="form-input" id="name" placeholder="Full Name" required value={formData.name} onChange={handleInputChange} />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div className="input-group">
                            <input type="email" className="form-input" id="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="input-group">
                            <div className="phone-input-wrapper">
                                <span className="country-code">{formData.countryCode}</span>
                                <input
                                    type="tel"
                                    className="form-input phone-input"
                                    id="phone"
                                    placeholder="Phone Number (Optional)"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>


                        <div className="input-group select-wrapper">
                            <Select
                                options={experienceOptions}
                                styles={customStyles}
                                placeholder="Trading Experience"
                                value={formData.experience}
                                onChange={(selected) => handleChange('experience', selected)}
                                className="react-select-container"
                                classNamePrefix="react-select"
                            />
                            {errors.experience && <div className="error">{errors.experience}</div>}
                        </div>
                        <div className="input-group select-wrapper">
                            <Select
                                options={countries}
                                styles={customStyles}
                                placeholder="Select your country"
                                value={formData.country}
                                onChange={(selected) => handleChange('country', selected)}
                                formatOptionLabel={formatOptionLabel}
                                className="react-select-container"
                                classNamePrefix="react-select"
                            />
                            {errors.country && <div className="error">{errors.country}</div>}
                        </div>
                        {!loading?<button type="submit" className="submit-btn">Join Waitlist Now</button>
                        :
                        <button disabled className="submit-btn">Loading...</button>}
                    </form>
                ) : (
                    <div className="success-message">
                        Welcome to Arc Funding
                        please check your email inbox.
                        
                        <div className="success-message-link">
                            <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                              👉 Don’t forget to check your spam or promotions folder just in case!
                            </a>
                        </div>

                    </div>
                )}

                <div className="benefits">
                    <div className="benefit">
                        <span className="benefit-number">100%</span>
                        <span className="benefit-text">Tailored Accounts</span>
                    </div>
                    <div className="benefit">
                        <span className="benefit-number">{joinedNumbers}</span>
                        <span className="benefit-text">people have joined the waitlist</span>
                    </div>
                    <div className="benefit">
                        <span className="benefit-number icon-benefit-number">✅</span>
                        <span className="benefit-text">instant funding</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitlistPage;