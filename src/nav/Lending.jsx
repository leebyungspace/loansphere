import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import AccountCard from '../nav/AccountCard';
import Header from '../components/Header';
import ApplyNow from '../components/ApplyNow';
import Footer from '../components/Footer';

const Lending = () => {
  const footerRef = useRef(null);
  const applyNowRef = useRef(null);

  const handleScrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToApplyNow = () => {
    applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
    <div className="lending-page container mx-auto px-4 py-12">
      <h1 className="text-3xl text-green-800 font-bold mb-4">Flexible Lending Solutions for Your Business</h1>
      <div className="mb-6 flex justify-center">
        <img
          src="/cleric.png"
          alt="Cleric visual"
          className="w-full max-w-md lg:max-w-3xl h-auto rounded-lg mb-6 shadow-md border border-green-500 mx-auto"
        />

      </div>
      <p className="text-green-700 text-lg mb-6">
        At Gatewise Plc, we offer a range of flexible, tailor-made lending solutions designed to boost your financial strength and support sustainable business growth.
      </p>

      <div className="mb-10">
        <button
          onClick={handleScrollToApplyNow}
          className="inline-block px-6 font-bold py-2 bg-green-800 text-white rounded hover:bg-green-700 transition"
        >
          Apply Now
        </button>
      </div>

      <section className="space-y-10">
        <AccountCard
          title="Working Capital Loan"
          description="Secure the liquidity your business needs to manage day-to-day operations. Our short-term working capital loan is designed to keep things moving, even during tough times."
          link="/workingcapitalloan"
        />

        <AccountCard
          title="Credit Line"
          description="Business can be unpredictable — Gatewise’s credit line gives you the buffer you need to handle unexpected expenses and seize new opportunities."
          link="/creditline"
        />

        <AccountCard
          title="Overdraft Facility"
          description="Stay agile with an overdraft solution that adapts to your needs. No fixed terms — just the liquidity you need, whenever you need it."
          link="/overdraft"
        />

        <AccountCard
          title="Investment Loan"
          description="From real estate to strategic expansion, our investment loan helps you grow confidently — whether you’re upgrading technology or launching a new project."
          link="/investmentloan"
        />

        <AccountCard
          title="Leasing Solutions"
          description="Upgrade your business infrastructure with Gatewise’s flexible leasing options — tailored to fuel growth, efficiency, and innovation."
          link="/leasing"
        />
      </section>

      <div className="mt-16 text-center">
        <p className="text-gray-600">Need help choosing the right solution?</p>
        <button
          onClick={handleScrollToFooter}
          className="inline-block mt-3 px-6 py-2 bg-green-800 text-white rounded hover:bg-green-700 font-bold transition"
        >
          Contact Us
        </button>
      </div>
    </div>
      <div ref={applyNowRef}>
        <ApplyNow />
        </div>

      <div ref={footerRef} className="apply-now-section container mx-auto px-4 py-12">
        <Footer />
      </div>
    </>
  );
};

export default Lending;