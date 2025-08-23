import React from 'react';
import '../assets/scss/PrivacyPolicy.scss';
import { Link } from 'react-router-dom';
const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="header">
        <Link to="/waitlist" className="back-link">← Back to waitlist</Link>
        <h1>Privacy Policy</h1>
        <div className="dates">
          <p><strong>Effective Date:</strong> 24-Aug-2025</p>
          <p><strong>Last Updated:</strong> 24-Aug-2025</p>
        </div>
      </div>
      
      <div className="content">
        <div className="intro">
          <p>
            <strong>MYARCFUNDING</strong> ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, services, and platforms (collectively, the "Services").
          </p>
          <p>
            By using our Services, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use immediately.
          </p>
        </div>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          
          <h3>1.1 Personal Information You Provide Directly</h3>
          <ul>
            <li>Full name, address, email, phone number</li>
            <li>Identification documents (e.g., passport, driver's license, utility bill) for verification (KYC)</li>
            <li>Payment and billing information (card details, bank account, transaction history)</li>
            <li>Trading account credentials (for funded account access)</li>
            <li>Communication history (emails, messages, support requests)</li>
          </ul>

          <h3>1.2 Information Collected Automatically</h3>
          <ul>
            <li>IP address, browser type, device information</li>
            <li>Geolocation data (based on IP)</li>
            <li>Website usage data (pages visited, clicks, time spent)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>1.3 Information from Third Parties</h3>
          <ul>
            <li>Identity verification providers</li>
            <li>Payment processors</li>
            <li>Fraud prevention databases</li>
            <li>Marketing partners and affiliates</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We process your information for purposes including:</p>
          <ul>
            <li>Creating and managing your MYARCFUNDING account</li>
            <li>Processing payments and withdrawals</li>
            <li>Conducting identity verification (KYC/AML compliance)</li>
            <li>Providing trading account access and performance monitoring</li>
            <li>Improving website functionality and user experience</li>
            <li>Sending important updates, announcements, or marketing communications (if consented)</li>
            <li>Detecting and preventing fraud or unauthorized activity</li>
            <li>Complying with legal and regulatory obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>We use cookies, web beacons, and other tracking tools to:</p>
          <ul>
            <li>Keep you logged in and maintain session security</li>
            <li>Remember preferences and improve website performance</li>
            <li>Analyze traffic and usage patterns</li>
            <li>Deliver relevant advertisements (if applicable)</li>
          </ul>
          <p>You can control cookies via your browser settings, but disabling them may affect site functionality.</p>
        </section>

        <section>
          <h2>4. Sharing Your Information</h2>
          <p>We do not sell your personal information. We may share your data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Payment processors, hosting providers, analytics services, verification agencies</li>
            <li><strong>Business Partners:</strong> For joint promotions (if you have opted in)</li>
            <li><strong>Regulatory Authorities:</strong> Where required by law or court order</li>
            <li><strong>Successors:</strong> In the event of a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>We retain your information for as long as necessary to:</p>
          <ul>
            <li>Provide our Services</li>
            <li>Comply with legal requirements (e.g., tax, anti-money laundering regulations)</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your data, including:</p>
          <ul>
            <li>Encryption (in transit and at rest)</li>
            <li>Secure data centers</li>
            <li>Access controls and authentication protocols</li>
            <li>Regular security monitoring and vulnerability assessments</li>
          </ul>
          <p>However, no method of transmission or storage is 100% secure. You use our Services at your own risk.</p>
        </section>

        <section>
          <h2>7. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Restrict or object to data processing</li>
            <li>Receive a copy of your data in a portable format</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:help@myarcfunding.com">help@myarcfunding.com</a>.</p>
        </section>

        <section>
          <h2>8. International Data Transfers</h2>
          <p>If you are located outside our primary operating jurisdiction, your data may be transferred to and processed in countries with different data protection laws. We take steps to ensure adequate safeguards are in place.</p>
        </section>

        <section>
          <h2>9. Third-Party Links</h2>
          <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of such sites. We encourage you to review their policies before providing personal information.</p>
        </section>

        <section>
          <h2>10. Children's Privacy</h2>
          <p>Our Services are not intended for individuals under 18 years of age. We do not knowingly collect data from minors. If we discover such information, we will delete it promptly.</p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted here with a revised "Last Updated" date. Significant changes may be notified via email or website announcement.</p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how your data is handled, please contact:</p>
          <p><strong>Email:</strong> <a href="mailto:help@myarcfunding.com">help@myarcfunding.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;