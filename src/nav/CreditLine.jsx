import React, { useState, useRef } from 'react';
import Header from '../components/Header.jsx';
import ApplyNow from '../components/ApplyNow.jsx';
import Footer from '../components/Footer.jsx';

const CreditLine = () => {
  const applyNowRef = useRef(null); // Reference to ApplyNow section

  const handleScrollToApplyNow = () => {
    applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <section className="bg-green-800 text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Credit Line Facility
          </h1>

          <p className="mb-6 text-lg">
            Gatewise Plc offers Credit Line solutions tailored for businesses needing working capital.
            Funds can be accessed in parts, giving you flexibility to cover supply chain expenses and operational needs efficiently.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-base space-y-3 mb-8">
            <li>No fixed repayment schedule</li>
            <li>Draw and repay at your discretion</li>
            <li>Only pay interest on the amount used</li>
            <li>Flexible and on-demand usage</li>
            <li>
              Security options: unsecured or secured with real estate, fixed assets, inventory,
              receivables, or personal/corporate guarantees
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">Terms & Conditions</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Amount: €1,000 – €1,000,000</li>
            <li>Usage: Designed specifically for working capital financing</li>
            <li>Term: Maximum duration of 3 years</li>
            <li>
              Interest: Fixed or variable, calculated using 6-month EURIBOR + bank’s margin
            </li>
            <li>
              Repayment: May be done partially over time or fully at the end of the loan term
            </li>
          </ul>

          <div className="mt-8">
            <button
              onClick={handleScrollToApplyNow}
              className="inline-block bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition"
            >
              Apply for Credit Line
            </button>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <div ref={applyNowRef}>
        <ApplyNow />
      </div>

      <Footer />
    </>
  );
};

export default CreditLine;
