import React, { useState } from 'react';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const formatEuro = (value) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  };

  const calculateLoan = (e) => {
    e.preventDefault();

    const principal = parseFloat(amount);
    const annualRate = parseFloat(interestRate) / 100;
    const months = parseInt(years) * 12;
    const monthlyRate = annualRate / 12;

    if (principal && monthlyRate && months) {
      const x = Math.pow(1 + monthlyRate, months);
      const monthly = (principal * x * monthlyRate) / (x - 1);

      const total = monthly * months;
      const interest = total - principal;

      setMonthlyPayment(monthly);
      setTotalPayment(total);
      setTotalInterest(interest);
    } else {
      alert("Please enter valid numbers for all fields.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md border border-green-500">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Loan Calculator</h2>

      <form onSubmit={calculateLoan} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Loan Amount (€)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Annual Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Repayment Period (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Calculate
        </button>
      </form>

      {monthlyPayment && (
        <div className="mt-6 border-t pt-4 text-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-green-700">Calculation Result</h3>
          <p><strong>Monthly Payment:</strong> {formatEuro(monthlyPayment)}</p>
          <p><strong>Total Payment:</strong> {formatEuro(totalPayment)}</p>
          <p><strong>Total Interest:</strong> {formatEuro(totalInterest)}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
