import React, { useRef } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ApplyNow from '../components/ApplyNow.jsx';

const SegregatedAccount = () => {
  const applyNowRef = useRef(null); // 👈 Reference to ApplyNow

  const handleScrollToApplyNow = () => {
    applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <section className="bg-green-800 text-white py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Segregated Accounts with Gatewise PLC
          </h1>

          <p className="text-lg mb-6">
            In business and banking, transparency and accuracy are vital. When sending payments
            on behalf of your customers, you must ensure that each transaction is carried out
            exactly as intended. It’s just as important to clearly track incoming payments and
            attribute them correctly.
          </p>

          <p className="mb-6">
            To support this, Gatewise offers <strong>segregated accounts</strong> — ideal for
            Payment Service Providers (PSPs) and other financial institutions. These accounts ensure
            complete separation of client funds from the bank’s operational assets, giving you
            precise visibility over which funds belong to which clients.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4">
            Who Is Eligible for a Segregated Account?
          </h2>
          <p className="mb-6">
            A segregated account is specifically used to safeguard assets on behalf of an individual
            or entity. Eligibility is determined by your financial regulatory body and may include
            requirements such as:
          </p>

          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>Having high-net-worth client status</li>
            <li>Maintaining a minimum qualifying investment</li>
            <li>Being a licensed financial intermediary or PSP</li>
          </ul>

          <p className="mb-8">
            For more detailed eligibility requirements, please contact our team at Gatewise.
          </p>

          <button
            onClick={handleScrollToApplyNow}
            className="inline-block bg-white text-green-800 font-medium px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Enquire About Eligibility
          </button>
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

export default SegregatedAccount;
