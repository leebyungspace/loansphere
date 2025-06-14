import React, { useState, useRef } from 'react';
import Header from '../components/Header.jsx';
import ApplyNow from '../components/ApplyNow.jsx';
import Footer from '../components/Footer.jsx';

const InvestmentLoan = () => {
  const applyNowRef = useRef(null); // Reference to ApplyNow section
  const handleScrollToApplyNow = () => {
    applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <Header />
    <section className="bg-green-800 text-white py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Investment Loans
        </h1>

        <p className="mb-6 text-lg">
          Growing businesses often require long-term investments in fixed assets. Gatewise Plc supports
          your expansion goals with flexible investment loans suited for purchasing equipment, property,
          and production infrastructure.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-base space-y-3 mb-8">
          <li>Loan terms of up to 7 years</li>
          <li>Flexible repayment options tailored to your cash flow</li>
          <li>Available loan amounts: €50,000 – €2,000,000</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Eligible Projects</h2>
        <ul className="list-disc list-inside text-base space-y-3 mb-8">
          <li>Facility construction or renovation</li>
          <li>Machinery, equipment, or technology upgrades</li>
          <li>Purchase of commercial vehicles or real estate</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Collateral Options</h2>
        <ul className="list-disc list-inside text-base space-y-3 mb-8">
          <li>Investment property</li>
          <li>Fixed assets owned by your business</li>
          <li>Government-backed INVEGA guarantee</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded p-4 mb-8">
          <h3 className="text-green-700 font-semibold mb-2">
            INVEGA Interest Reimbursement
          </h3>
          <p className="text-base">
            From January 1, 2024, businesses can receive up to <strong>40%</strong> interest reimbursement,
            capped at <strong>5% of the annual interest</strong> over a 3-year period through the INVEGA program.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleScrollToApplyNow}
            className="inline-block bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition"
          >
            Apply for Investment Loan
          </button>
        </div>
      </div>
    </section>
      <div ref={applyNowRef} className="mt-12">
        <ApplyNow />
      </div>
      <Footer />
    </>
  );
};

export default InvestmentLoan;
