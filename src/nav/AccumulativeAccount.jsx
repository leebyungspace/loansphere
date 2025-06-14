import React from 'react';
import Header from '../components/Header.jsx';
import ApplyNow from '../components/ApplyNow.jsx';
import Footer from '../components/Footer.jsx';

const AccumulativeAccount = () => {
  return (
    <>
      <Header />
      <section className="bg-green-800 text-gray-800 py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md border border-green-100">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Accumulative Accounts with Gatewise PLC
          </h1>

          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            Whether you're launching a new business or setting up a fresh branch, you’ll need an account
            for depositing authorized capital. Our accumulative account is designed to help you save time,
            offering a fast and seamless setup for deploying your funds.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Who Should Open an Accumulative Account?
          </h2>
          <p className="mb-6 text-gray-700">
            Perfect for start-ups and companies raising capital, these accounts allow you to deposit
            authorized capital only — no regular payments or transactions are permitted.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            What You'll Need to Apply
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Articles of incorporation</li>
            <li>A diagram showing company ownership and control structure</li>
            <li>
              Corporate documentation for each incorporator (e.g. business register extract, certificate of incumbency)
            </li>
          </ul>

          <p className="text-lg text-green-800">
            <strong>Interested in applying?</strong> Contact Gatewise to check if you’re eligible for an accumulative account.
          </p>
        </div>
      </section>

      <ApplyNow />

      <Footer />
    </>
  );
};

export default AccumulativeAccount;
