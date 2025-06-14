import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-green-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-green-50 hover:bg-green-100 transition rounded-t"
      >
        <h2 className="text-lg font-semibold text-green-700">{title}</h2>
        <span className="text-xl text-green-700">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="bg-white px-6 pb-6 pt-2">{children}</div>}
    </div>
  );
};

const FeeTable = ({ data }) => (
  <table className="w-full text-sm border mt-2">
    <thead>
      <tr className="bg-green-100 text-left text-green-900">
        <th className="p-2 font-semibold">Service</th>
        <th className="p-2 font-semibold">Fee (EUR)</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ service, fee }, i) => (
        <tr key={i} className="border-t border-gray-200">
          <td className="p-2">{service}</td>
          <td className="p-2">{fee}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default function FeesAndCommissions() {
  const localFees = {
    loan: [
      { service: "Loan Agreement Setup", fee: "From 0.5% of loan amount (min €200)" },
      { service: "Loan Increase", fee: "From 0.2% of total outstanding (min €200)" },
      { service: "Loan Extension", fee: "From 0.5% of outstanding (min €200)" },
      { service: "Loan Amendments / Document Handling", fee: "From 0.2% (min €200)" },
      { service: "Unused Loan Commitment", fee: "From 1% of unused loan amount" },
      { service: "Early Loan Repayment", fee: "2% of repaid amount (min €200)" },
      { service: "Permission for Subsequent Collateral Pledge", fee: "0.5% of loan (min €300)" },
      { service: "Other Permissions / Consents", fee: "€50" },
      { service: "Document Requests by Local Clients", fee: "€50" },
    ],
    guarantees: [
      { service: "Standard Guarantee Agreement", fee: "From 0.5% (min €100)" },
      { service: "Custom Guarantee Agreement", fee: "From 0.6% (min €150)" },
      { service: "Guarantee Amendments", fee: "€100" },
      { service: "Guarantee Verification / Notifications", fee: "€50" },
      { service: "Guarantee Cancellation", fee: "€50" },
      { service: "Claim Admin on Guarantee", fee: "0.1% (min €200)" },
      { service: "Info Requests on Guarantee", fee: "€50" },
      { service: "Courier (abroad / local)", fee: "€120 / €60" },
      { service: "Guarantee Rights Transfer", fee: "€80" },
    ],
    payments: [
      { service: "Internal Transfer (same client)", fee: "Free" },
      { service: "Internal Transfer (other client)", fee: "€0.30" },
      { service: "Xoom (loan disbursement)", fee: "€5.00" },
      { service: "Xoom Standard / Instant (outgoing)", fee: "€0.40" },
      { service: "Xoom Standard / Instant (incoming)", fee: "Free" },
      { service: "Intl Transfer (EUR / other)", fee: "€8 / €20 + bank charges" },
      { service: "Intl Incoming (any currency)", fee: "€20" },
    ],
    accounts: [
      { service: "Account Opening", fee: "Free" },
      { service: "UBO Verification (EU / non-EU)", fee: "€300 / €500" },
      { service: "Monthly Account Maintenance", fee: "Free" },
      { service: "High-Risk Customer Maintenance", fee: "€50" },
      { service: "Representative Appointment", fee: "€20" },
      { service: "Bankruptcy Status Update", fee: "€20" },
    ],
    documents: [
      { service: "Balance / Auditor Reports", fee: "€15 / €30" },
      { service: "Other Requests", fee: "From €45" },
      { service: "Agreement Copies", fee: "€6" },
      { service: "Mailing (3-day, local, intl)", fee: "€6 - €120" },
    ],
    escrow: [
      { service: "Escrow Setup", fee: "From 0.15%, min €1,000" },
    ],
  };

  const globalFees = {
    payments: [
      { service: "Internal Transfers", fee: "Free / €0.30" },
      { service: "MoneyGram Transfers (in/out)", fee: "Free / €2.00" },
      { service: "Xoom (in/out)", fee: "€20 / €8" },
      { service: "Wise (EUR / FX)", fee: "€40 + charges" },
      { service: "WorldRemit Incoming", fee: "€30 + charges" },
    ],
    api: [
      { service: "API Integration Setup", fee: "€10,000" },
    ],
    onboarding: [
      { service: "Onboarding (with account)", fee: "From €3,000" },
      { service: "ID Verification (per individual)", fee: "From €500" },
      { service: "Safeguarding Account", fee: "€4,000" },
      { service: "Accumulative Account", fee: "€3,000" },
      { service: "Regulatory Letters", fee: "€2,000" },
    ],
    accountMaintenance: [
      { service: "Business Account", fee: "From €250" },
      { service: "Safeguarding / Payment Account", fee: "From €1,000" },
      { service: "Representative Change", fee: "€20" },
      { service: "Bankruptcy Status Registration", fee: "€20" },
      { service: "Minimum Monthly Fees", fee: "Based on risk level" },
    ],
    documents: [
      { service: "Balance / Auditor Reports", fee: "€30 / €120" },
      { service: "General Requests", fee: "From €50" },
      { service: "Document Copies", fee: "€12" },
      { service: "Post (3-day, local, intl)", fee: "€6 - €240" },
    ],
  };

    return (
        <div className="bg-green-800 py-12 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-4 text-center">Fees & Commissions</h1>
                <p className="mb-10 text-center text-green-100">
                    Service charges and rates applicable to clients in Germany and internationally.
                </p>

                <Accordion title="🇩🇪 For Customers in Germany">
                    <h3 className="text-lg font-medium mt-4 mb-2 text-green-700">Loan Services</h3>
                    <FeeTable data={localFees.loan} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Guarantees</h3>
                    <FeeTable data={localFees.guarantees} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Payments</h3>
                    <FeeTable data={localFees.payments} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Account Services</h3>
                    <FeeTable data={localFees.accounts} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Statements & Documents</h3>
                    <FeeTable data={localFees.documents} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Escrow Services</h3>
                    <FeeTable data={localFees.escrow} />
                </Accordion>

                <Accordion title="🌍 For International Customers or Financial Institutions">
                    <h3 className="text-lg font-medium mt-4 mb-2 text-green-700">Payments</h3>
                    <FeeTable data={globalFees.payments} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">API Integration</h3>
                    <FeeTable data={globalFees.api} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Onboarding</h3>
                    <FeeTable data={globalFees.onboarding} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Account Maintenance</h3>
                    <FeeTable data={globalFees.accountMaintenance} />
                    <h3 className="text-lg font-medium mt-6 mb-2 text-green-700">Statements & Documents</h3>
                    <FeeTable data={globalFees.documents} />
                </Accordion>
            </div>
        </div>
    );

}
