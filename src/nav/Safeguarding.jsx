import React, { useState, useRef } from 'react';
import { FaChevronDown, FaFileAlt, FaRegFileArchive, FaUserShield } from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ApplyNow from '../components/ApplyNow.jsx';

const SafeguardingAccount = () => {
  const [showSteps, setShowSteps] = useState(false);
  const applyNowRef = useRef(null); // 👈 ref to ApplyNow section

  const handleScrollToApplyNow = () => {
    applyNowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <section className="bg-green-800 text-white py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-green-100">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Safeguarding Accounts with Gatewise PLC
          </h1>

          <p className="text-lg mb-6">
            A safeguarding account is a secure, segregated account that ensures your clients' funds are kept
            completely separate from your operational finances. It’s a legal requirement for institutions like
            Payment Institutions (PIs) and Electronic Money Institutions (EMIs).
          </p>

          <p className="mb-6">
            At Gatewise, we offer fully compliant safeguarding accounts that meet the regulations set by financial
            authorities. By isolating customer funds, you maintain transparency, safety, and legal adherence.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Why Choose a Safeguarding Account?
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Legally required for PIs and EMIs</li>
            <li>Funds held with licensed credit institutions or central banks</li>
            <li>Protects client assets against operational risk</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            How to Apply
          </h2>

          <div className="border rounded-lg shadow mb-6">
            <button
              onClick={() => setShowSteps(!showSteps)}
              className="w-full flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 font-semibold"
            >
              {showSteps ? 'Hide' : 'View'} Application Steps
              <FaChevronDown
                className={`ml-2 transform transition-transform ${
                  showSteps ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showSteps && (
              <div className="px-4 py-4 bg-white space-y-6 text-gray-700">
                <div className="flex items-start gap-3">
                  <FaFileAlt className="text-green-700 mt-1" />
                  <div>
                    <h3 className="font-semibold">1. Application</h3>
                    <p>Fill out our quick application form. We'll contact you within one business day.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaRegFileArchive className="text-green-700 mt-1" />
                  <div>
                    <h3 className="font-semibold">2. Documents</h3>
                    <p>Submit all required corporate documents for verification.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaUserShield className="text-green-700 mt-1" />
                  <div>
                    <h3 className="font-semibold">3. AML/KYC</h3>
                    <p>After AML and KYC checks are complete, your account will be ready to use.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mb-10">
            <button
              onClick={handleScrollToApplyNow}
              className="inline-block bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition"
            >
              Apply Now
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Safeguarding Acknowledgement Letter
          </h2>
          <p className="text-lg">
            After opening your safeguarding account, EMBank will issue an official acknowledgment letter
            with all account details. You can submit this document to your supervisory authority as part
            of your license application process.
          </p>
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

export default SafeguardingAccount;
