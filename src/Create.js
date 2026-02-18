import { useState } from "react";

function Create() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [aadhar, setaadhar] = useState("");

  const createAccount = () => {
    if (!name || !account) {
      alert("Fill all fields");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("account", account);
    localStorage.setItem("aadhar", aadhar);
    localStorage.setItem("balance", 0);

    alert("Account Created!");
    setName("");
    setAccount("");
  };

  return (
    <div className="create-page">
      <h2>Create Account</h2>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <br /><br />
      <input placeholder="Account No" value={account} onChange={e=>setAccount(e.target.value)} />
      <br /><br />
      <input placeholder="Aadhar No" value={aadhar} onChange={e=>setaadhar(e.target.value)} />
      <br /><br />   
      {/* <input placeholder="Email" value={Email} onChange={e=>setEmail(e.target.value)} /> */}
      {/* <br /><br />    */}
      {/* <input placeholder="Password" value={Password} onChange={e=>setPassword(e.target.value)} /> */}
      {/* <br /><br />    */}






      <button onClick={createAccount}>Create</button>
    </div>
  );
}

export default Create;
