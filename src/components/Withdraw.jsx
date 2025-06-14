import React from 'react';
import { useState } from 'react';

const Withdraw = ({ onWithdraw }) => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    if (amount) {
      onWithdraw(amount);
      setAmount('');
    }
  };

  return (
    <div className="withdraw-container">
      <h2>Withdraw Funds</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to withdraw"
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
export default Withdraw;