import { useState } from "react";

function Deposit() {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    let bal = Number(localStorage.getItem("balance"));
    bal += Number(amount);
    localStorage.setItem("balance", bal);
    alert("Deposited Successfully");
    setAmount("");
  };

  return (
    <div>
      <h2>Deposit</h2>
      <h3>Balance: ₹{localStorage.getItem("balance")}</h3>
      <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
      <br /><br />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default Deposit;
