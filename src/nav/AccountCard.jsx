import React from 'react';
import { Link } from 'react-router-dom';

const AccountCard = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-green-800">
      <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <Link to={link} className="text-green-800 bg-white font-medium border p-2 rounded-lg hover:bg-green-700 hover:text-white transition">
        Learn More →
      </Link>
    </div>
  );
};

export default AccountCard;