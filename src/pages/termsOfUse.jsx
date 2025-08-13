import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    label: "Introductory Provisions",
    value: "introductory-provisions",
    desc: <>
      <ul className="list-inside space-y-2  dark:text-white">
        <li> These GTC govern your ("Customer") use of services provided by ARC Capital.</li>
        <li> By registering or using the services, you enter into a contract with ARC Capital, agreeing to these terms.</li>
        <li> Services are only available to individuals over 18, residing in eligible countries. Access may be restricted based on local laws.</li>
        <li> ARC Capital does not provide services to individuals in restricted jurisdictions, those under international sanctions, or those with a financial crime or terrorism-related criminal record.</li>
        <li> The services include simulated trading on FOREX and financial markets, analytical tools, training materials, and access to trading platforms. Funds used in simulated trading are fictitious and cannot be withdrawn, used for real trading, or considered as real earnings.</li>
        <li> ARC Capital does not provide investment services, advice, or recommendations. Any trading guidance from its staff is not considered investment advice, and the company is not responsible for such statements.</li>
        <li> Personal data is processed per the Privacy Policy.</li>
        <li> Definitions and abbreviations are provided in Clause 18.</li>
      </ul>

    </>,
  },
  {
    label: "Services and Their Order",
    value: "services-order",
    desc: <ul className="list-disc list-inside space-y-2  dark:text-white">
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
    </ul>
    ,
  },
  {
    label: "Payment Terms",
    value: "payment-terms",
    desc: <ul className="list-disc list-inside space-y-2  dark:text-white">
      <li>Fees for the ARC Capital Challenge are in euros, but payments can be made in other currencies listed on the website. If you pay in a different currency, conversion rates will apply.</li>
      <li>Prices include all applicable taxes. Entrepreneurs (traders) are responsible for handling their own tax obligations.</li>
      <li>Payments can be made via credit card, bank transfer, or other available payment methods listed on the website.</li>
      <li>Immediate payment is required for card and express payment methods. If paying by bank transfer, a proforma invoice will be issued, and payment must be completed within the specified timeframe. Orders may be canceled if payment is late. Customers must cover all fees associated with the payment method.</li>
    </ul>
    ,
  },
  {
    label: "Client Section and Trading Platform",
    value: "client-platform",
    desc: <ul className="list-disc list-inside space-y-2  dark:text-white">
      <li>Each customer may have only one Client Section, where all services are managed.</li>
      <li>The number of ARC Capital Challenges and Verifications per Client Section may be limited based on initial capital and other parameters. Funds, performance, and service data cannot be transferred or combined between different products.</li>
      <li>Access credentials must not be shared. If registered as a business, employees/representatives may be granted access. Customers are responsible for all activity in their Client Section, and ARC Capital is not liable for misuse.</li>
      <li>The Client Section and Trading Platform may experience downtime for maintenance or other reasons. ARC Capital is not responsible for any loss of access, data, or content.</li>
      <li>Customers can request to cancel their Client Section via email. This will terminate the contract, and the customer will lose access to services without entitlement to a refund.</li>
    </ul>
    ,
  },
  {
    label: "Rules of Demo Trading, Risk Disclaimer",
    value: "demo-trading",
    desc: <ul className="list-disc list-inside space-y-2  dark:text-white">
      <li>Customers may trade freely during demo trading unless they engage in Forbidden Trading Practices (see below). They must follow market-standard trading rules, including proper risk management. Additional restrictions may apply based on the trading platform's conditions.</li>
      <li>ARC Capital has access to all demo trade data and may share it with affiliated entities. This data can be used without further approval or compensation. Customers may stop demo trading at any time.</li>
      <li>ARC Capital is not responsible for any interruptions, delays, or inaccuracies in market information displayed on the Trading Platform.</li>

      <li>
        <strong>Forbidden Trading Practices</strong>
        <ul className="list-disc list-inside pl-5 space-y-1">
          <li>Exploiting pricing errors or data delays.</li>
          <li>Using external or slow data feeds to gain an unfair advantage.</li>
          <li>Engaging in manipulative trading, such as placing opposite positions across different accounts.</li>
          <li>Violating platform terms and conditions.</li>
          <li>Using automated software, AI, or ultra-high-speed trading methods that manipulate the system.</li>
          <li>Gap trading around major financial events or market closures.</li>
          <li>Executing trades in a manner that mimics unrealistic forex market behaviors, such as overleveraging, excessive exposure, or rolling accounts.</li>
        </ul>
      </li>

      <li>
        Additionally, customers may NOT:
        <ul className="list-disc list-inside pl-5 space-y-1">
          <li>Allow third parties to access or trade on their ARC Capital Challenge accounts.</li>
          <li>Trade on behalf of other users or manage their accounts.</li>
          <li>Engage in improper risk management, such as placing unusually large positions compared to normal trades.</li>
        </ul>
        ARC Capital reserves the right to determine whether a trade violates these rules.
      </li>

      <li>
        <strong>Consequences of Violating Trading Rules</strong>
        <ul className="list-disc list-inside pl-5 space-y-1">
          <li>Invalidate the challenge or remove offending trades from trading history.</li>
          <li>Cancel all services and terminate the contract.</li>
          <li>Reduce leverage to 1:5 on the customer’s accounts.</li>
          <li>Apply penalties across multiple accounts if violations occur across linked or different accounts.</li>
          <li>Repeated violations may result in permanent account bans without a refund.</li>
        </ul>
      </li>
    </ul>
    ,
  },
  {
    label: "Risk Disclaimer",
    value: "risk-disclaimer",
    desc: <ul className="list-disc list-inside space-y-2  dark:text-white">
      <li>Financial markets are volatile, and trading carries significant risk.</li>
      <li>Profits in demo trading do not guarantee future success.</li>
      <li>ARC Capital is not responsible for how customers use demo trading data in real trading.</li>
      <li>Minimum profitable days - 7/30 must be profitable to be able to claim reward (min. 0.25% profit to be counted as 1 profitable day)</li>
      <li> Consistency rule (No significant delta should be found either in profit or loss)</li>
      <li> The minimum amount is $50 initial balance including our split.</li>
      <li> Leverage 1:30</li>
      <li> Trailing stop</li>
      <li> First Payout will be 50%</li>
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
    </ul>
    ,
  },
  {
    label: "ARC Capital Trader",
    value: "arc-capital-trade",
    desc: <ul className="list-disc list-inside space-y-2  dark:text-white">
      <li> If a customer successfully completes both the ARC Capital Challenge and Verification, they may be offered a contract by a third-party company to join the ARC Capital Trader Program.</li>
      <li> ARC Capital does not control or guarantee any agreement between the customer and the third-party company.</li>
      <li>  The customer acknowledges that their personal data may be shared with the third-party company for contract consideration.</li>
    </ul>
    ,
  },
  {
    label: "Use of Website, Services, and Other Content",
    value: "use-of-website",
    desc: <ul className="list-disc list-inside space-y-2  dark:text-white">
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
    </ul>
  },
  {
    label: "Disclaimer",
    value: "disclaimer",
    desc: `General disclaimer of liability and limitations of warranties.`,
  },
  {
    label: "Violation of Terms",
    value: "violation-terms",
    desc: `Consequences and actions taken when terms of service are violated.`,
  },
  {
    label: "Communication",
    value: "communication",
    desc: `How communication between parties is handled, including accepted methods and timelines.`,
  },
  {
    label: "Right to Withdraw from a Contract",
    value: "withdraw-contract",
    desc: `Explains the client's rights and procedures for withdrawing from a contract.`,
  },
  {
    label: "Defective Services",
    value: "defective-services",
    desc: `Outlines procedures for handling service deficiencies or problems.`,
  },
  {
    label: "Changes to the General Terms & Conditions (GTC)",
    value: "changes-gtc",
    desc: `Details how changes to the terms and conditions will be communicated and enforced.`,
  },
  {
    label: "Out-of-Court Consumer Dispute Settlement",
    value: "dispute-settlement",
    desc: `Information about resolving disputes without litigation.`,
  },
  {
    label: "Choice of Law and Jurisdiction",
    value: "law-jurisdiction",
    desc: `Specifies which laws apply and which courts have jurisdiction over disputes.`,
  },
  {
    label: "Duration and Termination of Contract",
    value: "contract-duration",
    desc: `Defines how long the contract lasts and how it may be terminated.`,
  },
  {
    label: "Final Provisions",
    value: "final-provisions",
    desc: `Miscellaneous legal clauses to finalize the agreement.`,
  },
  {
    label: "Definitions, Expressions, and Abbreviations",
    value: "definitions",
    desc: `Clarifies terms, expressions, and abbreviations used throughout the agreement.`,
  },
];
const TermsConditionTabs = () => {
  const [selectedTab, setSelectedTab] = useState("introductory-provisions");


  return (
    <>
      <div className="terms-condition-tabs py-24 bg-white dark:bg-jacarta-900">
        <div className="container">
          <div className="flex gap-2 items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-black dark:fill-white" height={20} width={20}>
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
            <Link to="/#pricing" className="text-base dark:text-white text-jacarta-900">Back to challenge</Link>
          </div>
          <h2 className="text-center font-display text-4xl font-medium  dark:text-white mb-10">
            Terms and Conditions for Use in a Simulated Platform</h2>
          <Tabs
            value={selectedTab}
            onChange={(val) => setSelectedTab(val)}
            orientation="vertical"
            className=''
          >
            <TabsHeader className="w-[350px] text-left .text-jacarta-700 dark:text-jacarta-200 "
              indicatorProps={{
                className: "hidden",
              }}>
              {data.map(({ label, value }, index) => (
                <Tab key={value}

                  value={value}
                  onClick={() => setSelectedTab(value)}
                  className={`text-left   ${selectedTab === value ? "active bg-accent text-white" : ""
                    }`}>
                  {index + 1}{" "}{label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                mount: { transition: { duration: 0 } },
                unmount: { transition: { duration: 0 } },
              }}
              className="px-10 ">
              {data.map(({ label, value, desc }, index) => (
                <TabPanel key={value} value={value} className="py-0 text-lg tab-body  dark:text-white font-medium ">
                  <h2 className=" font-display text-3xl font-medium .text-jacarta-700 dark:text-white mb-5">
                    {index + 1}. {" "}{" "}{label}
                  </h2>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default TermsConditionTabs;