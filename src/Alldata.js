function AllData() {
  return (
    <div className="alldata">
      <h2>All Data</h2>
      <p>Name: {localStorage.getItem("name")}</p>
      <p>Account: {localStorage.getItem("account")}</p>
      <p>Balance: ₹{localStorage.getItem("balance")}</p>
    </div>
  );
}

export default AllData;



