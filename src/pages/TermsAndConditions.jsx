import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/TermsAndConditions.scss';

const TermsAndConditions = () => {
  const [activeTab, setActiveTab] = useState('introductory-provisions');

  const tabs = [
    {
      id: 'introductory-provisions',
      title: '1 Introductory Provisions',
      content: (
        <div>
          <h2>1. Introductory Provisions</h2>
          <ol>
            <li>These GTC govern your ("Customer") use of services provided by ARC Capital.</li>
            <li>By registering or using the services, you enter into a contract with ARC Capital, agreeing to these terms.</li>
            <li>Services are only available to individuals over 18, residing in eligible countries. Access may be restricted based on local laws.</li>
            <li>ARC Capital does not provide services to individuals in restricted jurisdictions, those under international sanctions, or those with a financial crime or terrorism-related criminal record.</li>
            <li>The services include simulated trading on FOREX and financial markets, analytical tools, training materials, and access to trading platforms. Funds used in simulated trading are fictitious and cannot be withdrawn, used for real trading, or considered as real earnings.</li>
            <li>ARC Capital does not provide investment services, advice, or recommendations. Any trading guidance from its staff is not considered investment advice, and the company is not responsible for such statements.</li>
            <li>Personal data is processed per the Privacy Policy.</li>
            <li>Definitions and abbreviations are provided in Clause 18.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'services-order',
      title: '2 Services and Their Order',
      content: (
        <div>
          <h2>2. Services and Their Order</h2>
          <ol>
            <li>You can order services through the ARC Capital website by completing a registration or order form. After registration, login details for the Client Section and/or Trading Platform will be provided.</li>
            <li>Services include the Free Trial, ARC Capital Challenge, and Verification, each differing in scope. The Free Trial is limited and does not grant access to other services.</li>
            <li>All provided data must be complete, accurate, and up to date. Customers are responsible for keeping their information current.</li>
            <li>If you register as a business (providing tax or company details), consumer protection laws may not apply to you.</li>
            <li>Fees for the ARC Capital Challenge vary based on account size, risk level, and challenge conditions. Pricing details are available on the website, and individual discounts cannot be combined unless stated otherwise.</li>
            <li>Fees are for access to the ARC Capital Challenge and are non-refundable, even if you cancel, fail the challenge, or violate the GTC.</li>
            <li>If a customer disputes a paid fee (e.g., via chargeback), ARC Capital may suspend or deny future services at its discretion.</li>
            <li>The challenge settings you select will also apply to the subsequent Verification stage. Once selected, settings cannot be changed.</li>
            <li>ARC Capital may update service fees and parameters at any time, but changes will not affect already purchased services.</li>
            <li>Before submitting an order, you can review and edit details. Once submitted, you will receive a confirmation email. The ARC Capital Challenge contract is finalized upon payment.</li>
            <li>Customers are responsible for acquiring the necessary technical equipment and software to access services. ARC Capital does not guarantee compatibility with specific devices or browsers.</li>
            <li>Trading platforms are operated by third parties, and their terms and privacy policies apply separately. Customers must review these before using third-party services.</li>
            <li>If a customer places an unusually high number of orders in a short time, ARC Capital may issue a warning. If the behavior continues, orders may be suspended. If linked to Forbidden Trading Practices, further actions may be taken as outlined in Section 5 of the GTC.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'payment-terms',
      title: '3 Payment Terms',
      content: (
        <div>
          <h2>3. Payment Terms</h2>
          <ol>
            <li>Fees for the ARC Capital Challenge are in euros, but payments can be made in other currencies listed on the website. If you pay in a different currency, conversion rates will apply.</li>
            <li>Prices include all applicable taxes. Entrepreneurs (traders) are responsible for handling their own tax obligations.</li>
            <li>Payments can be made via credit card, bank transfer, or other available payment methods listed on the website.</li>
            <li>Immediate payment is required for card and express payment methods. If paying by bank transfer, a proforma invoice will be issued, and payment must be completed within the specified timeframe. Orders may be canceled if payment is late. Customers must cover all fees associated with the payment method.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'client-section-trading',
      title: '4 Client Section and Trading Platform',
      content: (
        <div>
          <h2>4. Client Section and Trading Platform</h2>
          <ol>
            <li>Each customer may have only one Client Section, where all services are managed.</li>
            <li>The number of ARC Capital Challenges and Verifications per Client Section may be limited based on initial capital and other parameters. Funds, performance, and service data cannot be transferred or combined between different products.</li>
            <li>Access credentials must not be shared. If registered as a business, employees/representatives may be granted access. Customers are responsible for all activity in their Client Section, and ARC Capital is not liable for misuse.</li>
            <li>The Client Section and Trading Platform may experience downtime for maintenance or other reasons. ARC Capital is not responsible for any loss of access, data, or content.</li>
            <li>Customers can request to cancel their Client Section via email. This will terminate the contract, and the customer will lose access to services without entitlement to a refund.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'demo-trading-risk',
      title: '5 Rules of Demo Trading, Risk Disclaimer',
      content: (
        <div>
          <h2>5. Rules of Demo Trading, Risk Disclaimer</h2>
          <ol>
            <li>Financial markets are volatile, and trading carries significant risk.</li>
            <li>Profits in demo trading do not guarantee future success.</li>
            <li>ARC Capital is not responsible for how customers use demo trading data in real trading.</li>
            <li>Minimum profitable days - 7/30 must be profitable to be able to claim reward (min. 0.25% profit to be counted as 1 profitable day)</li>
            <li> Consistency rule (No significant delta should be found either in profit or loss)</li>
            <li> The minimum amount is $50 initial balance including our split.</li>
            <li> Leverage 1:30</li>
            <li> Trailing stop</li>
            <li> First Payout will be 50%</li>
            <li>
              <strong>Challenge Activation</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>After paying the fee, the customer receives login credentials for the Trading Platform via email or the Client Section.</li>
                <li>The ARC Capital Challenge begins when the first demo trade is opened.</li>
                <li>If not activated within 30 days, access will be suspended, with a 6-month window for reactivation. After this period, services are terminated without a refund.</li>
              </ul>
            </li>

            <li>
              <strong>Challenge Requirements</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Trade on at least four different days.</li>
                <li>Not exceed the maximum daily loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 5% of initial capital</li>
                    <li>Aggressive: 10% of initial capital</li>
                    <li>Swing: 5% of initial capital</li>
                  </ul>
                </li>
                <li>Not exceed the maximum total loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 10% of initial capital</li>
                    <li>Aggressive: 20% of initial capital</li>
                    <li>Swing: 10% of initial capital</li>
                  </ul>
                </li>
                <li>Achieve a total profit goal:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 10% of initial capital</li>
                    <li>Aggressive: 20% of initial capital</li>
                    <li>Swing: 10% of initial capital</li>
                  </ul>
                </li>
                <li>If these conditions are met, ARC Capital grants access to the Verification phase for free. However, all trades must be closed before evaluation.</li>
              </ul>
            </li>

            <li>
              <strong>Verification Activation</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>The Verification phase starts when the first demo trade is opened.</li>
                <li>If not activated within 30 days, access is suspended, with a 6-month reactivation period.</li>
              </ul>
            </li>

            <li>
              <strong>Verification Requirements</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Trade on at least four different days.</li>
                <li>Not exceed the maximum daily loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 5% of initial capital</li>
                    <li>Aggressive: 10% of initial capital</li>
                    <li>Swing: 5% of initial capital</li>
                  </ul>
                </li>
                <li>Not exceed the maximum total loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 10% of initial capital</li>
                    <li>Aggressive: 20% of initial capital</li>
                    <li>Swing: 10% of initial capital</li>
                  </ul>
                </li>
                <li>Achieve a total profit goal:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 5% of initial capital</li>
                    <li>Aggressive: 10% of initial capital</li>
                    <li>Swing: 5% of initial capital</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong>Conditions for Successful Verification</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Meet all requirements listed above.</li>
                <li>Not violate ARC Capital's demo trading rules (e.g., forbidden practices in Clause 5.4).</li>
                <li>Not exceed the maximum capital allocation of $400,000 ($200,000 for Aggressive accounts) across all accounts and strategies.</li>
                <li>If these conditions are met, ARC Capital may recommend the customer for the ARC Capital Trader Program. However, this does not guarantee acceptance into the program.</li>
              </ul>
            </li>

            <li>
              <strong>Consequences of Failure</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Failure to meet the Challenge requirements results in disqualification from Verification.</li>
                <li>Failure to meet Verification requirements results in disqualification from the ARC Capital Trader Program.</li>
                <li>In both cases, accounts and services are canceled without a refund.</li>
                <li>ARC Capital is not responsible if the customer is rejected from the Trader Program.</li>
              </ul>
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 'risk-disclaimer',
      title: '6 Risk Disclaimer',
      content: (
        <div>
          <h2>6. Risk Disclaimer</h2>
          <ol>
            <li>Financial markets are volatile, and trading carries significant risk.</li>
            <li>Profits in demo trading do not guarantee future success.</li>
            <li>ARC Capital is not responsible for how customers use demo trading data in real trading.</li>
            <li>Minimum profitable days - 7/30 must be profitable to be able to claim reward (min. 0.25% profit to be counted as 1 profitable day)</li>
            <li> Consistency rule (No significant delta should be found either in profit or loss)</li>
            <li> The minimum amount is $50 initial balance including our split.</li>
            <li> Leverage 1:30</li>
            <li> Trailing stop</li>
            <li> First Payout will be 50%</li>
            <li>
              <strong>Challenge Activation</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>After paying the fee, the customer receives login credentials for the Trading Platform via email or the Client Section.</li>
                <li>The ARC Capital Challenge begins when the first demo trade is opened.</li>
                <li>If not activated within 30 days, access will be suspended, with a 6-month window for reactivation. After this period, services are terminated without a refund.</li>
              </ul>
            </li>

            <li>
              <strong>Challenge Requirements</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Trade on at least four different days.</li>
                <li>Not exceed the maximum daily loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 5% of initial capital</li>
                    <li>Aggressive: 10% of initial capital</li>
                    <li>Swing: 5% of initial capital</li>
                  </ul>
                </li>
                <li>Not exceed the maximum total loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 10% of initial capital</li>
                    <li>Aggressive: 20% of initial capital</li>
                    <li>Swing: 10% of initial capital</li>
                  </ul>
                </li>
                <li>Achieve a total profit goal:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 10% of initial capital</li>
                    <li>Aggressive: 20% of initial capital</li>
                    <li>Swing: 10% of initial capital</li>
                  </ul>
                </li>
                <li>If these conditions are met, ARC Capital grants access to the Verification phase for free. However, all trades must be closed before evaluation.</li>
              </ul>
            </li>

            <li>
              <strong>Verification Activation</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>The Verification phase starts when the first demo trade is opened.</li>
                <li>If not activated within 30 days, access is suspended, with a 6-month reactivation period.</li>
              </ul>
            </li>

            <li>
              <strong>Verification Requirements</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Trade on at least four different days.</li>
                <li>Not exceed the maximum daily loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 5% of initial capital</li>
                    <li>Aggressive: 10% of initial capital</li>
                    <li>Swing: 5% of initial capital</li>
                  </ul>
                </li>
                <li>Not exceed the maximum total loss limit:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 10% of initial capital</li>
                    <li>Aggressive: 20% of initial capital</li>
                    <li>Swing: 10% of initial capital</li>
                  </ul>
                </li>
                <li>Achieve a total profit goal:
                  <ul className="list-disc list-inside pl-5">
                    <li>Standard: 5% of initial capital</li>
                    <li>Aggressive: 10% of initial capital</li>
                    <li>Swing: 5% of initial capital</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong>Conditions for Successful Verification</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Meet all requirements listed above.</li>
                <li>Not violate ARC Capital's demo trading rules (e.g., forbidden practices in Clause 5.4).</li>
                <li>Not exceed the maximum capital allocation of $400,000 ($200,000 for Aggressive accounts) across all accounts and strategies.</li>
                <li>If these conditions are met, ARC Capital may recommend the customer for the ARC Capital Trader Program. However, this does not guarantee acceptance into the program.</li>
              </ul>
            </li>

            <li>
              <strong>Consequences of Failure</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Failure to meet the Challenge requirements results in disqualification from Verification.</li>
                <li>Failure to meet Verification requirements results in disqualification from the ARC Capital Trader Program.</li>
                <li>In both cases, accounts and services are canceled without a refund.</li>
                <li>ARC Capital is not responsible if the customer is rejected from the Trader Program.</li>
              </ul>
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 'arc-capital-trader',
      title: '7 ARC Capital Trader',
      content: (
        <div>
          <h2>7. ARC Capital Trader</h2>
          <ol>
            <li> If a customer successfully completes both the ARC Capital Challenge and Verification, they may be offered a contract by a third-party company to join the ARC Capital Trader Program.</li>
            <li> ARC Capital does not control or guarantee any agreement between the customer and the third-party company.</li>
            <li>  The customer acknowledges that their personal data may be shared with the third-party company for contract consideration.</li>

          </ol>
        </div>
      )
    },
    {
      id: 'website-services-content',
      title: '8 Use of Website, Services, and Other Content',
      content: (
        <div>
          <h2>8. Use of Website, Services, and Other Content</h2>
          <ol>
            <li>
              <strong>Content Ownership & Usage:</strong> The ARC Capital website, services, and all content (texts, images, graphics, videos, etc.) are legally protected and owned by ARC Capital or its licensors. ARC Capital grants a limited, non-exclusive, and revocable permission to use the content only for personal use within the scope of the services provided.
            </li>
            <li>
              <strong>Trademarks & Intellectual Property:</strong> All logos, trade names, and trademarks are owned by ARC Capital or its licensors. Customers do not have permission to use them.
            </li>
            <li>
              <strong>Fair Dealing & Dispute Resolution:</strong> Both ARC Capital and the customer must act fairly and in good faith. Any disputes must be resolved according to these General Terms & Conditions (GTC) and applicable law.
            </li>
            <li>
              <strong>No Additional Rights Granted:</strong> Customers only have rights explicitly granted in the GTC and may not use ARC Capital's services or content beyond what is permitted.
            </li>
            <li>
              <strong>Prohibited Actions:</strong> Customers are prohibited from:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Using tools that harm the website or exploit system bugs.</li>
                <li>Bypassing geographic or technical restrictions.</li>
                <li>Copying or backing up website content.</li>
                <li>Reverse-engineering or modifying any part of the website or services.</li>
                <li>Selling, renting, licensing, or redistributing ARC Capital’s services or content.</li>
                <li>Using bots or automation to collect data from the website.</li>
                <li>Employing any methods that may damage ARC Capital.</li>
              </ul>
            </li>
            <li>
              <strong>Consumer Rights Protection:</strong> These terms do not override any consumer rights that cannot be excluded by law.
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 'disclaimer',
      title: '9 Disclaimer',
      content: (
        <div>
          <h2>9. Disclaimer</h2>
          <ol>
            <li>General disclaimer of liability and limitations of warranties</li>

          </ol>
        </div>
      )
    },
    {
      id: 'violation-terms',
      title: '10 Violation of Terms',
      content: (
        <div>
          <h2>10. Violation of Terms</h2>
          <ol>
            <li>Consequences and actions taken when terms of service are violated.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'communication',
      title: '11 Communication',
      content: (
        <div>
          <h2>11. Communication</h2>
          <ol>
            <li>How communication between parties is handled, including accepted methods and timelines.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'withdraw-contract',
      title: '11 Right to Withdraw from a Contract',
      content: (
        <div>
          <h2>11. Right to Withdraw from a Contract</h2>
          <ol>
            <li>Explains the client's rights and procedures for withdrawing from a contract.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'defective-services',
      title: '12 Defective Services',
      content: (
        <div>
          <h2>12. Defective Services</h2>
          <ol>
            <li>Outlines procedures for handling service deficiencies or problems.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'changes-gtc',
      title: '13 Changes to the General Terms & Conditions (GTC)',
      content: (
        <div>
          <h2>13. Changes to the General Terms & Conditions (GTC)</h2>
          <ol>
            <li>Details how changes to the terms and conditions will be communicated and enforced.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'dispute-settlement',
      title: '14 Out-of-Court Consumer Dispute Settlement',
      content: (
        <div>
          <h2>14. Out-of-Court Consumer Dispute Settlement</h2>
          <ol>
            <li>Information about resolving disputes without litigation.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'law-jurisdiction',
      title: '15 Choice of Law and Jurisdiction',
      content: (
        <div>
          <h2>15. Choice of Law and Jurisdiction</h2>
          <ol>
            <li>Specifies which laws apply and which courts have jurisdiction over disputes.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'contract-duration',
      title: '16 Duration and Termination of Contract',
      content: (
        <div>
          <h2>16. Duration and Termination of Contract</h2>
          <ol>
            <li>Defines how long the contract lasts and how it may be terminated.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'final-provisions',
      title: '17 Final Provisions',
      content: (
        <div>
          <h2>17. Final Provisions</h2>
          <ol>
            <li>Miscellaneous legal clauses to finalize the agreement.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'definitions',
      title: '18 Definitions, Expressions, and Abbreviations',
      content: (
        <div>
          <h2>18. Definitions, Expressions, and Abbreviations</h2>
          <ol>
            <li>Clarifies terms, expressions, and abbreviations used throughout the agreement.</li>
          </ol>
        </div>
      )
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="terms-container">
      <div className="header">
        <Link to="/waitlist" className="back-link">← Back to waitlist</Link>
        <h1>Terms and Conditions for Use in a Simulated Platform</h1>
      </div>

      <div className="content-wrapper">
        <div className="sidebar">
          <nav className="tab-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>

        <main className="main-content">
          {activeTabData?.content}
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;