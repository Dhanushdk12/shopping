import { Link } from "react-router-dom";
import "./App.css";


function Navi() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/create">Create</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/alldata">All Data</Link>
      <Link to="/logout">logout</Link>
    </div>
  );
}

export default Navi;
