import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { allCountries } from 'country-telephone-data';
import { Link } from 'react-router-dom';
import './../assets/scss/waitlist4.scss';

const apiUrl = 'https://myapi.myarcfunding.com/api/v1/';

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    border: '2px solid transparent',
    padding: '8px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    width: '100%',
    minHeight: '58px',
    '&:hover': {
      borderColor: "#0ea5e9",//'#9c27b0',
    },
    // '&:focus': {
    //   borderColor: '#9c27b0',
    //   backgroundColor: 'rgba(138, 43, 226, 0.2)',
    //   boxShadow: '0 0 20px rgba(156, 39, 176, 0.4)',
    // },
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
      backgroundColor: "#0ea5e9",//'rgba(138, 43, 226, 0.3)',
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

function pad(n) {
  return String(n).padStart(2, '0');
}

function Home4() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: null,
    country: null,
    countryCode: '',
  });
  const [countdown, setCountdown] = useState({
    days: 17,
    hours: 0,
    minutes: 55,
  });
  const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
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

    // Fetch launch date and set countdown
    let launchTimestamp = null;

    const fetchLaunchDate = async () => {
      try {
        const timeRes = await axios.get(`${apiUrl}users/launch-date`);
        launchTimestamp = timeRes.data.data; // should be a timestamp in ms
        updateCountdown(launchTimestamp);
      } catch (err) {
        // fallback: keep default countdown
      }
    };

    const updateCountdown = (launchTime) => {
      const now = Date.now();
      let diff = launchTime - now;
      if (diff < 0) diff = 0;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setCountdown({
        days,
        hours,
        minutes,
      });
    };

    fetchLaunchDate();

    // Countdown timer
    const timer = setInterval(() => {
      if (launchTimestamp) {
        updateCountdown(launchTimestamp);
      }
    }, 60000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="app">
      <ToastContainer />
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <div className="kicker">
              <span>Early Access • Waitlist</span>
            </div>
            <h1>
              Claim Your <span className="gradient-text">20% Early Access</span> Discount
            </h1>
            <p className="lead">
              Limited to Waitlist Traders Only!
            </p>
            <p className="subtitle">
              Be among the first to access ARC Funding accounts when we launch. Get 
              funded instantly, scale fast, and keep up to <strong>90% of your profits</strong>.
            </p>

            <div className="features">
              <div className="feature">
                <h4>Instant Funding Options</h4>
                <p>No long evaluation phases — start trading and earning immediately.</p>
              </div>
              <div className="feature">
                <h4>High Payouts</h4>
                <p>Keep up to 90% of your profits — trade your style, keep your edge.</p>
              </div>
              <div className="feature">
                <h4>Scale Up to $300K</h4>
                <p>Seamless capital scaling for top-performing traders.</p>
              </div>
              <div className="feature">
                <h4>Trader-Friendly Rules</h4>
                <p>Transparent, minimal restrictions designed for real traders.</p>
              </div>
            </div>
          </div>

          <div className="waitlist-card">
            <h3>Join the Waitlist & Claim 20% Off</h3>
            <p className="small-muted">
              Be first in line — instant funding options and priority account 
              selection for waitlist members.
            </p>

            {!success ? (
              <form className="row" onSubmit={handleSubmit} noValidate>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your first name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div>
                  <label>Phone number (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+60 12 345 6789"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid-2">
                  <div>
                    <label>Trading Experience</label>
                    <Select
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
                    <label>Country</label>
                    <Select
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

                <button type="submit" className="btn-submit" disabled={success || loading}>
                  {loading ? 'Loading...' : (success ? 'Added — Check email' : 'Join the Waitlist & Claim My 20% Off')}
                </button>

                <div className="perks">
                  <span className="perk">🔒 Instant Funding Available</span>
                  <span className="perk">💰 Up to $300K Accounts</span>
                  <span className="perk">🏆 Top Trader Support</span>
                </div>

                <p>
                  By joining you agree to receive email updates. We never 
                  share your data. — <Link to="/privacy-policy" style={{  textDecoration: 'none' }}>Privacy</Link>
                </p>
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
          </div>
        </section>

        {/* FOMO Section */}
        <section className="fomo">
          <div>
            <h4>Spots Are Limited</h4>
            <small>Our early access waitlist is capped. Once it's full, the 20% discount is gone forever.</small>
          </div>
          <div className="countdown">
            <div className="unit">
              <div className="number">{countdown.days}</div>
              <div className="unit-label">Days</div>
            </div>
            <div className="unit">
              <div className="number">{pad(countdown.hours)}</div>
              <div className="unit-label">Hours</div>
            </div>
            <div className="unit">
              <div className="number">{pad(countdown.minutes)}</div>
              <div className="unit-label">Minutes</div>
            </div>
          </div>
          <small>Offer Ends in {countdown.days} Days {pad(countdown.hours)} Hours {pad(countdown.minutes)} Minutes</small>
        </section>

        {/* How It Works */}
        <section className="how">
          <div className="how-steps">
            <h3>How It Works</h3>
            <ol>
              <li><strong>Join the Waitlist Today</strong> — It's free and takes ~10 seconds.</li>
              <li><strong>Receive Exclusive Updates</strong> — Priority access, launch offers, account selection.</li>
              <li><strong>Get Your Account at 20% Off</strong> — Trade instantly when we go live and keep up to 90% of profits.</li>
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="card">
            <h4>Don't Miss Out on Your Advantage</h4>
            <p>
              When ARC Funding launches, waitlist traders will get first choice of accounts, 
              instant funding, and the only 20% discount we'll ever offer.
            </p>
            <Link to="/terms-of-use" className="btn" type="button">
                                    Learn More
                                </Link>
          </div>
        </section>

        {/* Features List */}
        <div className="final-features">
          <h4>Top features:</h4>
          <ul>
            <li>Fast account activation</li>
            <li>Competitive scaling rules</li>
            <li>Dedicated trader support</li>
          </ul>
        </div>

        <footer>
          © 2025 ARC Funding. All rights reserved. | Offer limited to waitlist traders only. Terms apply.
        </footer>
      </div>
    </div>
  );
}

export default Home4;