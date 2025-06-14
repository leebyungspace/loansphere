import React from 'react';
import { Link } from 'react-router-dom';
import AccountCard from '../nav/AccountCard';
import Header from '../components/Header';

const Payments = () => {
  return (
    <>
    <Header />
    <div className="payments-page container mx-auto px-4 py-12">
      <h1 className="text-3xl text-green-800 font-bold mb-4">Business Payments Made Simple</h1>
      <img
          src="/gw4.jpg"
          alt="Cleric visual"
          className="w-full max-w-md lg:max-w-3xl h-auto rounded-lg mb-6 shadow-md border border-green-500 mx-auto"
        />
      <p className="text-green-800 text-lg mb-6">
        Gatewise offers seamless local and international payment solutions to support your business operations and global reach.
      </p>

      <section className="space-y-8">
        <AccountCard
          title="International Payments"
          description="Make secure and fast global transfers via trusted networks including MoneyGram, Xoom, Wise, and WorldRemit. Ideal for cross-border business needs."
          link="/international"
        />

        <AccountCard
          title="Local Payments"
          description="Easily handle domestic transfers through our online portal or integrate directly into our banking platform for streamlined automation."
          link="/local"
        />
      </section>

      <div className="mt-16 text-center">
        <p className="text-green-800">Need help choosing the right payment option?</p>
        <Link
          to="/contact"
          className="inline-block mt-3 px-6 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
    </>
  );
};

export default Payments;