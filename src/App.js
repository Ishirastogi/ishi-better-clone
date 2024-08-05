import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import MortgageCalculator from "./components/MortgageCalculator";


function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start" element={<Start />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
