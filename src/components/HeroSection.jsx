import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-green-800 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Gatewise plc</h1>
        <img
          src="/gw5.jpg"
          alt="Cleric visual"
          className="w-full max-w-md lg:max-w-3xl h-auto rounded-lg mb-6  border border-green-500 mx-auto"
        />
        <p className="text-lg md:text-xl mb-6">
          Fast. Flexible. Transparent. Get the financial support you need, when you need it.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/applynow"
            className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Apply Now
          </Link>
          <Link
            to="/auth"
            className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-800 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
