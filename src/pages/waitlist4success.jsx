import React from 'react';
import { CheckCircle, Mail, Users, Calendar, Gift, MessageCircle, BarChart3 } from 'lucide-react';
import '../assets/scss/waitlist5.scss';

function Waitlist4Success() {
    return (
        <div className="app">
            <div className="container">
                {/* Success Hero Section */}
                <div className="success-hero">
                    <div className="success-left">
                             <div class="logo-badge">
    <img src="images/logo.png" alt="Logo" />
  </div>
                        <div className="kicker">
                            <CheckCircle size={16} />
                            Waitlist: Success
                        </div>
                        <h1>
                            Your <span className="gradient-text">20% Early Access</span> Is Locked
                            <CheckCircle className="success-icon" size={32} />
                        </h1>
                        <p className="success-subtitle">
                            We've sent a confirmation email from <strong>ARC Team &lt;info@myarcfunding.com&gt;</strong>.
                            Please follow the steps below to make sure you receive your discount code on <strong>Oct 01</strong>.
                        </p>

                        {/* Email Action Buttons */}
                        <div className="email-actions">
                            <button className="btn-email" onClick={() => window.open('https://mail.google.com', '_blank')}>
                                <Mail size={16} />
                                Open Gmail
                            </button>
                            {/* <button className="btn-email" onClick={() => window.open('https://outlook.live.com', '_blank')}>
                                <Mail size={16} />
                                Open Outlook
                            </button>
                            <button className="btn-email" onClick={() => window.open('https://mail.yahoo.com', '_blank')}>
                                <Mail size={16} />
                                Open Yahoo
                            </button> */}
                        </div>
                    </div>
                    {/* Steps Section */}
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-header">
                                <div className="step-number">⭐</div>
                                <h3>Find & Star Our Email</h3>
                            </div>


                            <ul className="step-list">
                                <li>
                                    <strong>Search inbox for:</strong><br />
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@myarcfunding.com"
                                        target="_blank"
                                        rel="noopener noreferrer"><code>info@myarcfunding.com</code></a>
                                </li>
                                <li>
                                    <strong>Star</strong> the email and drag it to Primary (Gmail).
                                </li>
                                <li>
                                    Not there? Check <em>Spam</em> or <em>Promotions</em> and click <strong>"Not spam"</strong>.
                                </li>
                            </ul>
                        </div>

                        {/* <div className="step-card">
                            <div className="step-header">
                                <div className="step-number">2)</div>
                                <h3>Add Us to Contacts</h3>
                            </div>
                            <p className="step-description">
                                This tells inboxes you want our emails.
                            </p>
                            <a
                                className="btn-action"
                                href="/arcfunding.vcf"
                                download
                            >
                                <Users size={16} />
                                Add ARC Funding to Contacts (.vcf)
                            </a>
                        </div>

                        <div className="step-card">
                            <div className="step-header">
                                <div className="step-number">3)</div>
                                <h3>Add Launch to Calendar</h3>
                            </div>
                            <p className="step-description">
                                We'll send your discount code on launch day. It's valid for 48 hours only.
                            </p>
                            <a
                                className="btn-action"
                                href="/arcfunding_launch.ics"
                                download
                            >
                                <Calendar size={16} />
                                Add Launch Reminder (.ics)
                            </a>
                        </div> */}
                    </div>

                    {/* Heads Up Alert */}
                    <div className="heads-up-alert">
                        <strong>Heads up:</strong> Your discount code will be active for <strong>48 hours from launch</strong> after that it expires.
                    </div>
                </div>



                {/* Bottom Actions Grid */}
                {/* <div className="bottom-actions">
                    <div className="action-card">
                        <h4>Want Early Bonuses?</h4>
                        <p>Invite 3 trader friends to the waitlist and get an extra <strong>$50 off</strong> your first account.</p>
                        <button className="btn-secondary">
                            <Gift size={16} />
                            Copy My Referral Link
                        </button>
                    </div>

                    <div className="action-card">
                        <h4>Join Our Telegram</h4>
                        <p>Live updates, Q&A, and pre-launch sneak peeks.</p>
                        <button className="btn-secondary">
                            <MessageCircle size={16} />
                            Open Telegram Channel
                        </button>
                    </div>

                    <div className="action-card">
                        <h4>Quick Survey (15s)</h4>
                        <p>What account size are you aiming for? Help us tailor your offer.</p>
                        <button className="btn-secondary">
                            <BarChart3 size={16} />
                            Answer 3 Questions
                        </button>
                    </div>
                </div> */}

                {/* Footer */}
                <footer>
                    <p>
                        Need help? Email <a href="mailto:support@myarcfunding.com">support@myarcfunding.com</a>.
                        © 2025 ARC Funding
                    </p>
                </footer>
            </div>
        </div>
    );
}


export default Waitlist4Success;