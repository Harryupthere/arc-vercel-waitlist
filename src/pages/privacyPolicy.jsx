import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/scss/waitlist3.scss';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ minHeight: '100vh', paddingTop: 40, paddingBottom: 40 }}>
      <button
        className="btn"
        style={{ margin: '0 0 24px 0', display: 'block', maxWidth: 220 }}
        onClick={() => navigate('/waitlist')}
        type="button"
      >
        ← Back to Waitlist
      </button>
      <h1 style={{ marginBottom: 16, textAlign: 'center' }}>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> [Insert Date]<br />
        <strong>Last Updated:</strong> [Insert Date]</p>
      <p>
        MYARCFUNDING ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, services, and platforms (collectively, the "Services").
      </p>
      <p>
        By using our Services, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use immediately.
      </p>
      <h3>1. Information We Collect</h3>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li><strong>Personal Information You Provide Directly:</strong> Full name, address, email, phone number, identification documents (e.g., passport, driver’s license, utility bill) for verification (KYC), payment and billing information (card details, bank account, transaction history), trading account credentials (for funded account access), communication history (emails, messages, support requests).</li>
        <li><strong>Information Collected Automatically:</strong> IP address, browser type, device information, geolocation data (based on IP), website usage data (pages visited, clicks, time spent), cookies and similar tracking technologies.</li>
        <li><strong>Information from Third Parties:</strong> Identity verification providers, payment processors, fraud prevention databases, marketing partners and affiliates.</li>
      </ul>
      <h3>2. How We Use Your Information</h3>
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
      <h3>3. Cookies and Tracking Technologies</h3>
      <ul>
        <li>Keep you logged in and maintain session security</li>
        <li>Remember preferences and improve website performance</li>
        <li>Analyze traffic and usage patterns</li>
        <li>Deliver relevant advertisements (if applicable)</li>
      </ul>
      <p>You can control cookies via your browser settings, but disabling them may affect site functionality.</p>
      <h3>4. Sharing Your Information</h3>
      <ul>
        <li><strong>Service Providers:</strong> Payment processors, hosting providers, analytics services, verification agencies</li>
        <li><strong>Business Partners:</strong> For joint promotions (if you have opted in)</li>
        <li><strong>Regulatory Authorities:</strong> Where required by law or court order</li>
        <li><strong>Successors:</strong> In the event of a merger, acquisition, or sale of assets</li>
      </ul>
      <h3>5. Data Retention</h3>
      <ul>
        <li>Provide our Services</li>
        <li>Comply with legal requirements (e.g., tax, anti-money laundering regulations)</li>
        <li>Resolve disputes and enforce agreements</li>
      </ul>
      <h3>6. Data Security</h3>
      <ul>
        <li>Encryption (in transit and at rest)</li>
        <li>Secure data centers</li>
        <li>Access controls and authentication protocols</li>
        <li>Regular security monitoring and vulnerability assessments</li>
      </ul>
      <p>However, no method of transmission or storage is 100% secure. You use our Services at your own risk.</p>
      <h3>7. Your Privacy Rights</h3>
      <ul>
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent for marketing communications</li>
        <li>Restrict or object to data processing</li>
        <li>Receive a copy of your data in a portable format</li>
        <li>Lodge a complaint with a data protection authority</li>
      </ul>
      <p>To exercise these rights, contact us at <a href="mailto:help@myarcfunding.com">help@myarcfunding.com</a>.</p>
      <h3>8. International Data Transfers</h3>
      <p>
        If you are located outside our primary operating jurisdiction, your data may be transferred to and processed in countries with different data protection laws. We take steps to ensure adequate safeguards are in place.
      </p>
      <h3>9. Third-Party Links</h3>
      <p>
        Our website may contain links to third-party sites. We are not responsible for the privacy practices of such sites. We encourage you to review their policies before providing personal information.
      </p>
      <h3>10. Children’s Privacy</h3>
      <p>
        Our Services are not intended for individuals under 18 years of age. We do not knowingly collect data from minors. If we discover such information, we will delete it promptly.
      </p>
      <h3>11. Changes to This Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted here with a revised "Last Updated" date. Significant changes may be notified via email or website announcement.
      </p>
      <h3>12. Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy or how your data is handled, please contact:<br />
        Email: <a href="mailto:help@myarcfunding.com">help@myarcfunding.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;