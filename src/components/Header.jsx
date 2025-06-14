import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center border rounded shadow-lg p-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="/gwlogo.jpg"
            alt="loan sphere"
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-4">
            <p className="font-bold uppercase text-green-800">Gatewise plc</p>
            <span className="text-sm font-bold">Unlock Your Dreams With Easy Loans!</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium z-20">
          <Link to="/homepage" className="bg-green-800 hover:text-green-600 p-3 text-white border-transparent rounded-lg">Home</Link>
          <Link to="/accounts" className="bg-green-800 hover:text-green-600 p-3 text-white border-transparent rounded-lg">Accounts</Link>
          <Link to="/lending" className="bg-green-800 hover:text-green-600 p-3 text-white border-transparent rounded-lg">Lending</Link>
          <Link to="/payments" className="bg-green-800 hover:text-green-600 p-3 text-white border-transparent rounded-lg">Payments</Link>
          <Link to="/guarantee-letter" className="bg-green-800 hover:text-green-600 p-3 text-white border-transparent rounded-lg">Guarantee Letter</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-lg z-30"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden flex justify-end bg-green-800 text-white mt-2 z-10">
          <nav className="flex flex-col items-start gap-4 p-4 shadow-lg border-transparent rounded w-full">
            <Link to="/homepage" className="">Home</Link>
            <Link to="/accounts" className="">Accounts</Link>
            <Link to="/lending">Lending</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/guarantee-letter">Guarantee Letter</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
