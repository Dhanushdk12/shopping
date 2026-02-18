
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Signin from "./Pages/Signin";
import Mission from "./Pages/Mission";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}





