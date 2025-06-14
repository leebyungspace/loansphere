import React from 'react';


const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Fast Approvals",
      desc: "We review and respond to loan applications quickly, so you're not left waiting.",
    },
    {
      title: "Transparent Process",
      desc: "No hidden fees or confusing terms. Just clear, upfront communication.",
    },
    {
      title: "Secure & Private",
      desc: "Your data and transactions are fully encrypted and protected.",
    },
    {
      title: "Flexible Loans",
      desc: "We offer multiple loan options tailored to your needs and budget.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl text-green-800 font-bold mb-8">Why Choose Gatewise Plc?</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {benefits.map((item, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-green-800 font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;