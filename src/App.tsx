import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fill fixed w-full">
      <ul className="bg-black w-full text-white flex justify-center px-4 space-x-3 p-5 text-[20px] uppercase">
        <li className="">
          <Link
            to="/"
            className={`${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${location.pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <div className="pt-16">
        {" "}
        {/* Adjust the pt-16 based on your navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
