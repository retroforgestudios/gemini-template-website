import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Home from "./pages/Home";
import Life from "./pages/Life";
import Health from "./pages/Health";
import Auto from "./pages/Auto";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life" element={<Life />} />
          <Route path="/health" element={<Health />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}