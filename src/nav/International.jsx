import React, { useState, useRef} from 'react';
import Header from '../components/Header.jsx';
import ApplyNow from '../components/ApplyNow.jsx';
import Footer from '../components/Footer.jsx';
import {Link} from 'react-router-dom';

const InternationalPayments = () => {
    const applyNowRef = useRef(null);
    const handleScrollToApplyNow = () => {
        applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <>
      <Header />
    <section className="bg-green-800 text-white py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          International Payments
        </h1>

        <p className="mb-6 text-lg text-green-100">
          Expand your reach globally with Gatewise Plc’s secure and efficient international payment
          options. Gain access to trusted global remittance providers including{' '}
          <strong className="text-white">MoneyGram</strong>,{' '}
          <strong className="text-white">Xoom</strong>,{' '}
          <strong className="text-white">Wise</strong>, and{' '}
          <strong className="text-white">WorldRemit</strong>—all accessible through our digital
          banking platform.
        </p>

        <h2 className="text-2xl font-semibold text-green-200 mt-8 mb-4">
          Gatewise Payment Infrastructure
        </h2>
        <p className="mb-6 text-base text-green-100">
          We’re committed to making global transactions smooth and reliable. Our payment systems are
          designed to support fast, affordable, and compliant international transfers using leading
          remittance platforms.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-green-100">
          <li>Use MoneyGram, Xoom, Wise, or WorldRemit to send and receive funds</li>
          <li>Segregated and safeguarding accounts to protect client funds</li>
          <li>Track payments and control foreign transactions with ease</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-200 mb-4">
          Who Can Use Our International Payment Services?
        </h2>
        <ul className="list-disc list-inside text-base space-y-4 mb-8 text-green-100">
          <li>
            <strong className="text-white">E-commerce Businesses:</strong> Accept payments from international customers
            using accessible remittance methods.
          </li>
          <li>
            <strong className="text-white">Import/Export Traders:</strong> Pay global suppliers or receive customer
            payments through platforms like Wise or MoneyGram.
          </li>
          <li>
            <strong className="text-white">Manufacturing Companies:</strong> Transact globally with reliable fund delivery
            partners.
          </li>
          <li>
            <strong className="text-white">Service Providers:</strong> Get paid in foreign currencies directly into your
            business account.
          </li>
          <li>
            <strong className="text-white">Any business handling cross-border payments.</strong>
          </li>
        </ul>

        <div className="mt-8">
          <button
            onClick={handleScrollToApplyNow}
            className="inline-block bg-white text-green-800 font-medium px-6 py-3 rounded hover:bg-green-100 transition"
          >
            Apply for International Payments
          </button>
        </div>
      </div>
    </section>
        {/* Scroll Target */}
        <div ref={applyNowRef}>
            <ApplyNow />
        </div>
        <Footer />
    </>
  );
};

export default InternationalPayments;
