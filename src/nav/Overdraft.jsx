import React, { useState, useRef} from 'react';
import Header from "../components/Header.jsx";
import ApplyNow from "../components/ApplyNow.jsx";
import Footer from "../components/Footer.jsx";

const Overdraft = () => {
    const applyNowRef = useRef(null);
    const handleScrollToApplyNow = () => {
        applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <>
      <Header />
    <section className="bg-green-800 text-white py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Overdraft Facility
        </h1>

        <p className="mb-6 text-lg">
          The overdraft facility at Gatewise Plc enables businesses to manage short-term liquidity by
          making payments beyond their current account balance, up to a specified credit limit.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-base space-y-3 mb-8">
          <li>No periodic repayments required</li>
          <li>Credit limit accessible directly from your account</li>
          <li>Automatic settlement when funds are credited</li>
          <li>Interest applied only on the amount utilized</li>
          <li>No documentation needed for drawdowns or repayments</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Terms & Conditions</h2>
        <ul className="list-disc list-inside space-y-3 mb-6">
          <li>Loan Amount: €1,000 – €1,000,000</li>
          <li>Duration: 12 months</li>
          <li>
            Interest Rate: Fixed or floating (based on 6-month EURIBOR + bank margin)
          </li>
          <li>Repayment: In full at maturity</li>
          <li>
            Collateral Options: May be unsecured or secured with:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Real estate mortgage</li>
              <li>Fixed asset or inventory pledge</li>
              <li>Receivables</li>
              <li>Personal or corporate guarantees</li>
            </ul>
          </li>
        </ul>

        <div className="mt-8 inline-block bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition">
            <button onClick={handleScrollToApplyNow}>
                Apply for Overdraft Below
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

export default Overdraft;
