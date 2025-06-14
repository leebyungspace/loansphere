import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // 👈 Add this

const LoanForm = () => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [repaymentPeriod, setRepaymentPeriod] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "loans"), {
        uid: user.uid,
        email: user.email,
        amount,
        reason,
        repaymentPeriod,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      toast.success("Loan request submitted.");
      setAmount("");
      setReason("");
      setRepaymentPeriod("");

      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      toast.error("Failed to submit loan request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Request a Loan</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Loan Amount"
          className="w-full mb-3 px-4 py-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Reason for Loan"
          className="w-full mb-3 px-4 py-2 border rounded"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Repayment Period (e.g., 6 months)"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={repaymentPeriod}
          onChange={(e) => setRepaymentPeriod(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit Loan Request"}
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
