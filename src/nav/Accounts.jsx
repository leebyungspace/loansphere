import React from 'react';
import { Link } from 'react-router-dom';
import AccountCard from '../nav/AccountCard';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

const Accounts = () => {
  return (
    <>
    <Header />
    <div className="accounts-page container mx-auto px-4 py-12">
      <h1 className="text-3xl text-green-800 font-bold mb-4">Business Accounts Tailored for You</h1>
      <p className="text-lg mb-10">
        We have flexible account solutions, built to support your business at every stage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <AccountCard
          title="Accumulative Accounts"
          description="Get started quickly with an easy setup and the ability to deploy authorized capital instantly. Perfect for companies looking to save time and move fast."
          link="/accumulative"
        />

        <AccountCard
          title="Business Accounts"
          description="A modern account for fast-moving, growth-oriented businesses. Manage your daily operations seamlessly with banking that matches your pace."
          link="/business"
        />

        <AccountCard
          title="Safeguarding Accounts"
          description="Secure your clients’ funds and stay compliant with regulatory requirements. Ideal for businesses that handle customer money."
          link="/safeguarding"
        />

        <AccountCard
          title="Segregated Accounts"
          description="Designed specifically for Payment Service Providers (PSPs) and financial institutions. Clearly separate and track client funds with ease."
          link="/segregated"
        />
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl text-green-800 font-semibold mb-2">Not finding the account you need?</h2>
        <p className="text-gray-600 mb-4">We’re here to help. Let’s talk about a custom solution that fits your business.</p>
        <Link
          to="/applynow"
          className="inline-block px-6 py-2 bg-green-800 text-white font-bold rounded hover:bg-green-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Accounts;