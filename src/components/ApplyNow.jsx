import React from 'react';

const ApplyNow = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-5xl w-full">

          {/* Left: Image */}
          <div className="flex justify-center items-center md:w-1/2 w-full p-6">
            <img src="/bewise.jpg" alt="Loan Illustration" className="w-full h-auto object-contain rounded" />
          </div>

          {/* Right: Form */}
          <div className="md:w-1/2 w-full p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-4">Application</h1>
            <p className="mb-6 text-gray-600">
              Kindly provide the details below for processing. It usually takes 24–48hrs for approvals.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="org">Organization Name</label>
                <input type="text" id="org" className="w-full px-3 py-2 border rounded" required />
              </div>

              {/* Textarea */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  className="w-full px-3 py-2 border rounded resize-none"
                  rows="4"
                  placeholder="What are you applying for? Please provide any additional details that may help us process your application."
                ></textarea>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the <span className="text-green-700 underline cursor-pointer">terms and conditions</span>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
