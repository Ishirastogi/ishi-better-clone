import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MortgageCalculator from "./components/MortgageCalculator";


function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mortage-calculator" element={<MortgageCalculator />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
