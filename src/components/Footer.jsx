import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Gatewise Plc</h3>
          <p className="text-sm">
            Empowering individuals and small businesses with fast, secure, and transparent lending.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/loan-request" className="hover:underline">Apply for Loan</Link></li>
            <li><Link to="/loan-history" className="hover:underline">Loan History</Link></li>
            <li><Link to="/auth" className="hover:underline">Login / Register</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <p className="text-sm">Email: support@loansphere.com</p>
          <p className="text-sm">Phone: +1 (800) 123-4567</p>
          <p className="text-sm">Location: Zurich, Germany</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-200 mt-10">
        &copy; {new Date().getFullYear()} LoanSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
