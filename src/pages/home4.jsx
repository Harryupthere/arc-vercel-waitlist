import React, { useState, useEffect } from 'react';
import './../assets/scss/waitlist4.scss';

function Home4() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    country: ''
  });
  const [countdown, setCountdown] = useState({
    days: 17,
    hours: 0,
    minutes: 55
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="app">
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

            <form className="row" onSubmit={handleSubmit}>
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
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Experience</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                <div>
                  <label>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn">
                Join the Waitlist & Claim My 20% Off
              </button>

              <div className="perks">
                <span className="perk">🔒 Instant Funding Available</span>
                <span className="perk">💰 Up to $300K Accounts</span>
                <span className="perk">🏆 Top Trader Support</span>
              </div>

              <p className="muted-note">
                By joining you agree to receive email updates. We never 
                share your data. — <a href="#privacy">Privacy</a>
              </p>
            </form>
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
              <div className="number">{countdown.hours.toString().padStart(2, '0')}</div>
              <div className="unit-label">Hours</div>
            </div>
            <div className="unit">
              <div className="number">{countdown.minutes.toString().padStart(2, '0')}</div>
              <div className="unit-label">Minutes</div>
            </div>
          </div>
          <small>Offer Ends in {countdown.days} Days {countdown.hours} Hours {countdown.minutes} Minutes</small>
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
            <button className="btn">Learn More</button>
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