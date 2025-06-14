import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      q: "How long does approval take?",
      a: "Most loan applications are reviewed within 24–48 hours.",
    },
    {
      q: "What documents do I need?",
      a: "Typically, you’ll need a valid ID, proof of income, and a completed application form.",
    },
    {
      q: "Can I check my loan status?",
      a: "Yes! Log in to your dashboard to view your loan status and history anytime.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, i) => (
          <div key={i} className="bg-gray-100 p-5 rounded-lg shadow">
            <h4 className="font-semibold text-lg text-green-800 mb-2">{item.q}</h4>
            <p className="text-gray-700 text-sm">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
