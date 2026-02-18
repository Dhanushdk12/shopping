// import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navi from "./Navi";
// import Home from "./Home";
// import Create from "./Create";
// import Deposit from "./Deposite";
// import Withdraw from "./Withdraw";
// import AllData from "./Alldata";
// import './App.css'



// function App() {
//   return (
    
//     <Router>
//       <Navi />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/deposit" element={<Deposit />} />
//         <Route path="/withdraw" element={<Withdraw />} />
//         <Route path="/alldata" element={<AllData />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navi from "./Navi";
import Home from "./Home";
import Create from "./Create";
import Deposit from "./Deposite";
import Withdraw from "./Withdraw";
import AllData from "./Alldata";
import Logout from "./Logout";
import Login from "./Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-bg">
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/alldata" element={<AllData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
