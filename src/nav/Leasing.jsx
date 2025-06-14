import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ApplyNow from '../components/ApplyNow.jsx';
import Footer from '../components/Footer.jsx';

const Leasing = () => {
    const applyNowRef = useRef(null);
    const handleScrollToApplyNow = () => {
        applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <>
    <Header />
    <section className="bg-green-800 text-white py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Equipment Leasing
        </h1>

        <p className="mb-6 text-lg">
          At Gatewise Plc, we offer flexible leasing solutions to help your business grow without large
          upfront investments. Whether you're expanding your fleet or upgrading machinery, we’ve got
          you covered.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Benefits of Leasing</h2>
        <ul className="list-disc list-inside text-base space-y-3 mb-8">
          <li>Tailored options for diverse business needs</li>
          <li>Fast approval process—no notaries required</li>
          <li>Start repayment up to 3 months after financing</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Leasing Conditions</h2>
        <ul className="list-disc list-inside text-base space-y-3 mb-8">
          <li>Financing range: €20,000 – €2,000,000</li>
          <li>Applicable for vehicles, machinery, equipment, and tools</li>
          <li>Upfront contribution: at least 10%</li>
          <li>Bullet payment option at lease-end (based on asset type)</li>
          <li>Assets must be insured in favor of Gatewise Plc</li>
          <li>Vehicle assets registered under Gatewise in Regitra</li>
          <li>Leasing term: minimum 6 months, maximum 6 years</li>
          <li>Monthly repayment schedule applies</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded p-4 mb-8">
          <p className="text-sm text-gray-700">
            💡 Please refer to our{' '}
            <Link to="/fees" className="underline text-green-700 font-medium">
              Fees and Commissions
            </Link>{' '}
            page to view all applicable charges.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">How to Apply</h2>
        <ol className="list-decimal list-inside text-base space-y-3 mb-8">
          <li>Gather documents: financial statements, business plan, commercial offer</li>
          <li>Complete our online leasing application form</li>
          <li>Gatewise Plc will assess your eligibility and business needs</li>
          <li>Negotiate lease terms (tenure, downpayment, other conditions)</li>
          <li>Sign lease contract and proceed with equipment acquisition</li>
        </ol>

        <div className="mt-8">
          <button
            onClick={handleScrollToApplyNow}
            className="inline-block bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition"
          >
            Apply for Leasing
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

export default Leasing;
