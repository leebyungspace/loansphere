import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ApplyNow from '../components/ApplyNow.jsx';

const BusinessAccount = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      <Header />
    <section className="bg-green-800 text-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-green-100">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Business Accounts with Gatewise PLC
        </h1>

        <p className="text-lg mb-6">
          Your business evolves rapidly — you need an account that supports growth, transactions,
          and security. Our business accounts allow for seamless payments and customizable user access
          with multi-signature rules (4-eye, 6-eye, or 8-eye).
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Who Is Eligible?</h2>
        <p className="mb-6">
          To open a business account, your company must be registered in your operating region. Some banks may also
          require minimum business history, staff count, or revenue levels. Reach out to Gatewise to confirm your eligibility.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">How to Apply in the EU</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Business address in an EU country</li>
          <li>VAT and EORI numbers</li>
          <li>Proof of activity (business license, articles of incorporation)</li>
        </ul>
        <p className="mb-10">Once these documents are ready, you're set to apply for a business account.</p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Types of Business Bank Accounts</h2>

        {/* Accordion Section */}
        <div className="space-y-4">
          {/* Accordion Item */}
          {[
            {
              id: 1,
              title: 'Business Checking Account',
              content:
                'Built for daily operations, this account supports online bill payments, check issuing, and multi-user access. While it may have higher fees, it often offers additional business tools and better interest options.',
            },
            {
              id: 2,
              title: 'Business Savings Account',
              content:
                'A savings account designed for businesses to securely store funds for growth, equipment purchases, or emergency reserves — while earning interest.',
            },
            {
              id: 3,
              title: 'Cash Management Account',
              content:
                'Tailored for financial efficiency, these accounts offer cash flow automation, spending oversight, and access to tools that help you manage your company’s finances more effectively.',
            },
          ].map(({ id, title, content }) => (
            <div key={id} className="border rounded-lg shadow">
              <button
                className="w-full flex items-center justify-between text-left px-4 py-3 bg-green-100 hover:bg-green-200 font-semibold transition"
                onClick={() => toggleAccordion(id)}
              >
                {title}
                <FaChevronDown
                  className={`ml-2 transform transition-transform ${
                    openAccordion === id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === id && (
                <div className="px-4 py-3 bg-white text-gray-700">
                  <p>{content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
      <ApplyNow />
      <Footer />
    </>
  );
};

export default BusinessAccount;
