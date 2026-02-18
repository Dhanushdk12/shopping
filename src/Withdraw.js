import { useState } from "react";

function Withdraw() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    let bal = Number(localStorage.getItem("balance"));
    if (Number(amount) > bal) {
      alert("Insufficient Balance");
      return;
    }
    bal -= Number(amount);
    localStorage.setItem("balance", bal);
    alert("Withdraw Successful");
    setAmount("");
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <h3>Balance: ₹{localStorage.getItem("balance")}</h3>
      <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
      <br /><br />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default Withdraw;
