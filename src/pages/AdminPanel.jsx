import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const AdminPanel = () => {
  const { isAdmin, user } = useAuth();
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    if (!isAdmin) return;
    const fetchLoans = async () => {
      const querySnapshot = await getDocs(collection(db, "loans"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLoans(data);
    };
    fetchLoans();
  }, [isAdmin]);

  const handleAction = async (loanId, status, loanEmail) => {
    try {
      const loanRef = doc(db, "loans", loanId);
      await updateDoc(loanRef, { status });

      // Optional: Send email via EmailJS
      await emailjs.send("service_2cz40ck", "template_ww8b7lf", {
        to_email: loanEmail,
        loan_status: status,
      }, "HzqW2sUdz2C1efEVk");

      toast.success(`Loan ${status}`);
      setLoans((prev) =>
        prev.map((loan) =>
          loan.id === loanId ? { ...loan, status } : loan
        )
      );
    } catch (err) {
      toast.error("Failed to update loan");
    }
  };

  if (!isAdmin) {
    return <div className="p-4 text-red-600 font-semibold">Access denied. Admins only.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Loan Approval Panel</h1>

      {loans.length === 0 ? (
        <p>No loan requests.</p>
      ) : (
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id} className="border-t">
                <td className="p-2">{loan.name}</td>
                <td className="p-2">{loan.email}</td>
                <td className="p-2">${loan.amount}</td>
                <td className="p-2 font-medium">{loan.status}</td>
                <td className="p-2 flex gap-2">
                  {loan.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleAction(loan.id, "approved", loan.email)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(loan.id, "rejected", loan.email)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {loan.status !== "pending" && <span className="text-gray-500">No actions</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
