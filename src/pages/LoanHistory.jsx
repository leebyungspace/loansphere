import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const LoanHistory = () => {
  const { user } = useAuth();
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      if (!user) return;

      const q = query(
        collection(db, "loans"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      const loanList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoans(loanList);
      setLoading(false);
    };

    fetchLoans();
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading your loans...</p>;

  if (loans.length === 0) return <p className="text-center mt-10">No loan history yet.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Loan History</h2>
      <ul className="space-y-4">
        {loans.map((loan) => (
          <li key={loan.id} className="border p-4 rounded">
            <p><strong>Amount:</strong> ${loan.amount}</p>
            <p><strong>Reason:</strong> {loan.reason}</p>
            <p><strong>Repayment:</strong> {loan.repaymentPeriod}</p>
            <p><strong>Status:</strong> <span className={`font-semibold ${loan.status === "approved" ? "text-green-600" : loan.status === "rejected" ? "text-red-600" : "text-yellow-600"}`}>{loan.status}</span></p>
            <p className="text-xs text-gray-500 mt-1">
              Submitted: {loan.createdAt?.toDate().toLocaleString() || "N/A"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanHistory;
