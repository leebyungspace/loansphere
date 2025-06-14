import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import ApplyNow from '../components/ApplyNow.jsx';
import Footer from '../components/Footer.jsx';

const WorkingCapitalLoan = () => {
  const [amount, setAmount] = useState(50000);
  const [term, setTerm] = useState(12);
  const interestRate = 0.075;

  const monthlyRate = interestRate / 12;
  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
  const totalPayment = monthlyPayment * term;
  const totalInterest = totalPayment - amount;

  return (
    <>
      <Header />
      <section className="bg-green-800 text-white py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Flexible Lending Solutions for Your Business
          </h1>

          <p className="mb-4 text-lg">
            Gatewise PLC Working Capital Loan is the perfect fit for businesses that need short-term funding
            for operations, production, or seasonal growth. With fixed repayment schedules and options for
            both secured and unsecured loans, we help keep your business running smoothly.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Loan Benefits</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Tailored solutions for each business</li>
            <li>Fixed repayment plan for easy cash flow management</li>
            <li>Loan is fully repaid at maturity</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">Loan Conditions</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Amount: €1,000 – €1,000,000</li>
            <li>Term: 3 to 60 months</li>
            <li>Repayment: Monthly or quarterly after disbursement</li>
            <li>
              Collateral: Unsecured or secured (real estate, fixed assets, inventory, receivables,
              personal/corporate guarantee, or ILTE-issued individual guarantee)
            </li>
          </ul>

          <a
            href="#"
            className="inline-block mb-10 bg-green-700 text-white font-medium px-6 py-3 rounded hover:bg-green-800 transition"
          >
            View Fees & Commissions
          </a>

          {/* Calculator Section */}
          <div className="bg-gray-50 border border-green-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Loan Calculator</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Loan Amount */}
              <div>
                <label className="block font-medium mb-1">Loan Amount (€)</label>
                <input
                  type="range"
                  min={1000}
                  max={1000000}
                  step={1000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-sm mt-1 text-gray-600">€{amount.toLocaleString()}</div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block font-medium mb-1">Loan Term (months)</label>
                <input
                  type="range"
                  min={3}
                  max={60}
                  step={1}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-sm mt-1 text-gray-600">{term} months</div>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="mt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
                  <p className="text-xl font-bold text-green-700">
                    €{monthlyPayment.toFixed(2).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Interest</p>
                  <p className="text-xl font-bold text-green-700">
                    €{totalInterest.toFixed(2).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Payment</p>
                  <p className="text-xl font-bold text-green-700">
                    €{totalPayment.toFixed(2).toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-500 text-center">
                * Calculations are based on an estimated 7.5% annual interest rate. Final conditions will
                depend on your application review.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ApplyNow />
      <Footer />
    </>
  );
};

export default WorkingCapitalLoan;
