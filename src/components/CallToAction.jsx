import React from 'react';

import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 bg-green-800 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-6 text-lg">Apply now and take the first step toward financial freedom.</p>
      <Link
        to="/applynow"
        className="inline-block bg-white text-green-800 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition"
      >
        Apply for a Loan
      </Link>
    </section>
  );
};

export default CallToAction;
