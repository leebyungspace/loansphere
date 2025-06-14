import { FaUserCheck, FaWpforms, FaClock, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserCheck className="text-green-800 text-3xl" />,
      title: "1. Create an Account",
      desc: "Sign up and verify your email to access the platform securely.",
    },
    {
      icon: <FaWpforms className="text-green-800 text-3xl" />,
      title: "2. Submit a Loan Request",
      desc: "Fill out a quick form with your basic loan details and submit it.",
    },
    {
      icon: <FaClock className="text-green-800 text-3xl" />,
      title: "3. Wait for Review",
      desc: "An admin reviews your application and sends updates via email.",
    },
    {
      icon: <FaCheckCircle className="text-green-800 text-3xl" />,
      title: "4. Get Approved or Rejected",
      desc: "Check your loan status anytime. Approved? Funds are on their way!",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl text-green-800 font-bold mb-8">How It Works</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
