import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ApplyNow from '../components/ApplyNow.jsx';
import Footer from '../components/Footer.jsx';

const LocalPayments = () => {
    const applyNowRef = useRef(null);
    const handleScrollToApplyNow = () => {
        applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <>
      <Header />
    <section className="bg-green-800 text-white py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Local Payments
        </h1>

        <p className="mb-6 text-lg text-green-100">
          Expand your reach locally with Gatewise Plc’s secure and efficient domestic payment
          options. Enjoy seamless transactions through NIBSS, instant transfers, and direct account
          payments—all integrated into our digital banking platform.
        </p>

        <h2 className="text-2xl font-semibold text-green-200 mt-8 mb-4">
          Gatewise Local Payment Infrastructure
        </h2>
        <p className="mb-6 text-base text-green-100">
          We’ve built a reliable system for real-time local transactions. With advanced payment rails
          and trusted banking partnerships, your business can pay and get paid instantly across Nigeria.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-green-100">
          <li>Make and receive instant transfers across all Nigerian banks</li>
          <li>Real-time settlement for improved cash flow</li>
          <li>Secure transactions with proper compliance measures</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-200 mb-4">
          Who Can Use Our Local Payment Services?
        </h2>
        <ul className="list-disc list-inside text-base space-y-4 mb-8 text-green-100">
          <li>
            <strong className="text-white">Retail Businesses:</strong> Receive instant payments from
            customers directly into your account.
          </li>
          <li>
            <strong className="text-white">Freelancers & Creatives:</strong> Get paid faster for
            services rendered within Nigeria.
          </li>
          <li>
            <strong className="text-white">Service Providers:</strong> Automate client billing and
            payments with ease.
          </li>
          <li>
            <strong className="text-white">NGOs & Charities:</strong> Disburse funds securely to
            beneficiaries.
          </li>
          <li>
            <strong className="text-white">Any local business that sends or receives payments daily.</strong>
          </li>
        </ul>

        <div className="mt-8">
          <button
            onClick={handleScrollToApplyNow}
            className="inline-block bg-white text-green-800 font-medium px-6 py-3 rounded hover:bg-green-100 transition"
          >
            Apply for Local Payments
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

export default LocalPayments;
