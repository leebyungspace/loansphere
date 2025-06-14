import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const GuaranteeLetter = () => {
  return (
    <>
    <Header />
    <div className="bg-green-800 min-h-screen py-12">
      <div className="container mx-auto px-4 bg-white rounded-lg shadow-md p-6 md:p-12 text-green-800">
        <h1 className="text-3xl font-bold mb-4 text-green-700">🛡 Letter of Guarantee</h1>
        <p className="text-green-600 text-lg mb-6">
          Issued by Gatewise PLC
        </p>
        <p className="mb-4">
          A Letter of Guarantee is a powerful financial tool that builds trust in business transactions. It’s our promise — if your obligations under a contract aren’t fulfilled, we’ll cover the agreed amount on your behalf.
        </p>
        <p className="mb-4">
          Whether you're bidding for contracts, securing payments, or managing international trade, Gatewise plc provides tailored Letters of Guarantee — locally and internationally.
        </p>
        <p className="text-red-600 font-medium mb-10">
          ⚠ Please confirm all guarantee letters directly with Gatewise PLC before use.
        </p>

        {/* Benefits Section */}
        <Section title="✅ Why Use a Letter of Guarantee?">
          <ul className="list-disc pl-6 space-y-2">
            <li>Reassures your business partners</li>
            <li>Helps you win tenders and contracts</li>
            <li>Protects advance payments</li>
            <li>Provides financial security in high-stakes deals</li>
          </ul>
        </Section>

        {/* How It Works */}
        <Section title="🔄 How It Works">
          <ol className="list-decimal pl-6 space-y-2">
            <li>You apply for a guarantee through Gatewise PLC</li>
            <li>We assess your financial position and review your documents</li>
            <li>If approved, we issue a guarantee on your behalf</li>
            <li>If you default, we pay the beneficiary up to the guaranteed amount</li>
          </ol>
        </Section>

        {/* Types */}
        <Section title="🧾 Types of Letters of Guarantee We Offer">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tender Guarantee (Bid Bond):</strong> Ensures you'll sign the contract if awarded</li>
            <li><strong>Performance Guarantee:</strong> Confirms the project will be completed as agreed</li>
            <li><strong>Advance Payment Guarantee:</strong> Protects the upfront payment made to you</li>
            <li><strong>Warranty Guarantee:</strong> Covers post-project repairs or issues</li>
            <li><strong>Financial Guarantee:</strong> Guarantees a specific payment under the contract</li>
            <li><strong>Customs Guarantee:</strong> Covers duties and taxes for customs clearance</li>
          </ul>
        </Section>

        {/* Issuance Process */}
        <Section title="📝 The Issuance Process">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Submit your request with transaction details</li>
            <li>We review your documents (contracts, financials, etc.)</li>
            <li>Credit assessment is conducted (collateral may be required)</li>
            <li>We agree on terms – amount, fees, expiry, and conditions</li>
            <li>The Letter of Guarantee is issued</li>
            <li>You pay the fee (usually a percentage of the guarantee amount)</li>
          </ol>
        </Section>

        {/* Requirements */}
        <Section title="⚙ Requirements & Conditions">
          <ul className="list-disc pl-6 space-y-2">
            <li>Good credit standing</li>
            <li>Collateral or security may be required</li>
            <li>Applicable fees vary</li>
            <li>Terms and conditions must be fulfilled for validity</li>
          </ul>
        </Section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-2 text-green-700">💬 Ready to Get Started?</h2>
          <p className="text-green-600 mb-4 max-w-2xl mx-auto">
            Contact Gatewise PLC today to discuss the right Letter of Guarantee for your business.  
            We’ll tailor the solution that matches your needs — with trust, transparency, and speed.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h3 className="text-2xl font-bold mb-4 text-green-700">{title}</h3>
    {children}
  </section>
);

export default GuaranteeLetter;
