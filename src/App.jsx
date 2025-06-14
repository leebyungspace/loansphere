import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import DashBoard from "./pages/DashBoard.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import LoanForm from "./pages/LoanForm.jsx";
import LoanHistory from "./pages/LoanHistory.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import HomePage from "./components/HomePage.jsx"
import ApplyNow from "./components/ApplyNow.jsx";
import Accounts from "./nav/Accounts.jsx";
import Lending from "./nav/Lending.jsx";
import GuaranteeLetter from "./nav/GuaranteeLetter.jsx";
import Payments from "./nav/Payments.jsx";
import AccumulativeAccount from "./nav/AccumulativeAccount.jsx";
import BusinessAccount from "./nav/BusinessAccount.jsx";
import Segregated from "./nav/Segregated.jsx";
import Safeguarding from "./nav/Safeguarding.jsx";
import WorkingCapitalLoan from "./nav/WorkingCapitalLoan.jsx";
import CreditLine from "./nav/CreditLine.jsx";
import Overdraft from "./nav/Overdraft.jsx";
import InvestmentLoan from "./nav/InvestmentLoan.jsx";
import Leasing from "./nav/Leasing.jsx";
import International from "./nav/International.jsx";
import Fees from "./nav/Fees.jsx";
import Local from "./nav/Local.jsx";

import { useAuth } from "./context/AuthContext.jsx"; // ✅ import useAuth

function App() {
  const { isAdmin } = useAuth(); // ✅ get isAdmin from context

  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/applynow" element={<ApplyNow />} />
      <Route path="/lending" element={<Lending />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/guarantee-letter" element={<GuaranteeLetter />} />
      <Route path="/accumulative" element={<AccumulativeAccount />} />
      <Route path="/business" element={<BusinessAccount />} />
      <Route path="/safeguarding" element={<Safeguarding />} />
      <Route path="/segregated" element={<Segregated />} />
      <Route path="/workingcapitalloan" element={<WorkingCapitalLoan />} />
      <Route path="/creditline" element={<CreditLine />} />
      <Route path="/overdraft" element={<Overdraft />} />
      <Route path="/investmentloan" element={<InvestmentLoan />} />
      <Route path="/leasing" element={<Leasing />} />
      <Route path="/international" element={<International />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/local" element={<Local />} />
      <Route path="/international" element={<International />} />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/loan-request"
        element={
          <ProtectedRoute>
            <LoanForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/loan-history"
        element={
          <ProtectedRoute>
            <LoanHistory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          isAdmin ? <AdminPanel /> : <Navigate to="/dashboard" />
        }
      />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
