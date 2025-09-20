import React from "react";
import './../assets/scss/waitlist4.scss';

function Waitlist4Success  () {
    const email='<info@myarcfunding.com>'
    return (
    <div className="app">
        <div className="container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-left">
                      <div class="logo-badge">
    <img src="images/logo.png" alt="Logo" />
  </div>
                    <div className="kicker">
                        <span>Waitlist • Success</span>
                    </div>
                    <h2>
                         You're In — Your 20% Early AccessIs Locked ✅
                    </h2>
                    <p className="leadsuccess">
             We’ve sent a confirmation email from ARC Funding {email}.<br/> Please follow the steps below to make sure you receive your discount code on Oct 01.
            </p>
              <div className="features">
              <div className="feature">
                <h4>Gmail</h4>
                </div>
                </div>
                </div>
            </section>
        </div>
    </div>
    )
};

export default Waitlist4Success;