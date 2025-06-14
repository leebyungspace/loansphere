import React from "react";
import Header from "../components/Header.jsx"
import HeroSection from "../components/HeroSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import CallToAction from "../components/CallToAction.jsx";
import FAQs from "../components/FAQs.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
    return (
        <>
            <Header />

            <HeroSection />

            <HowItWorks />

            <div className="bg-green-800 items-center p-6 rounded-lg shadow-md mt-8 mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-white">Achieve Financial Freedom with LoanSphere</h2>
                <p className="text-white mb-4">
                    At LoanSphere, we believe financial freedom is within everyone's reach — and we're here to help you get there.
                    Whether you're consolidating debt, starting a business, or covering personal expenses, our flexible loan
                    options are designed to support your goals.
                </p>
                <ul className="list-disc list-inside text-white space-y-2">
                    <li><strong>Accessible Loans:</strong> Easy applications and fast approvals, so you can get help when you need it most.</li>
                    <li><strong>Transparent Terms:</strong> No hidden fees. Know exactly what you're signing up for.</li>
                    <li><strong>Flexible Repayment Plans:</strong> Choose a repayment option that fits your lifestyle and income.</li>
                    <li><strong>Credit Building:</strong> On-time repayments help you improve your credit score over time.</li>
                    <li><strong>Expert Guidance:</strong> Our support team is always here to guide you toward smarter financial decisions.</li>
                </ul>
                <p className="text-white mt-4">
                    Financial freedom starts with the right partner. Join thousands who trust LoanSphere to take control of their future.
                </p>
            </div>

            <WhyChooseUs />

            <Testimonials />

            <CallToAction />

            <FAQs />

            <Footer />
        </>
    );
};
export default HomePage;