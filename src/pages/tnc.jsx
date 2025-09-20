import React from 'react';
import '../assets/scss/PrivacyPolicy.scss';
import { Link } from 'react-router-dom';
const Tnc = () => {
  return (
    <div className="privacy-container">
      <div className="header">
        <Link to="/" className="back-link">← Back to waitlist</Link>
        <h1>Terms and Conditions</h1>
        <div className="dates">
          <p><strong>Effective Date:</strong> 24-Aug-2025</p>
          <p><strong>Last Updated:</strong> 24-Aug-2025</p>
        </div>
      </div>
      <iframe
          src="/tnc.pdf"
          title="Terms and Conditions"
          width="100%"
          height="1100px"
        />

    </div>
  );
};

export default Tnc;