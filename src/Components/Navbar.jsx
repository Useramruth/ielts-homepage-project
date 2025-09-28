import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="text-2xl font-bold text-indigo-600">
            IELTS INSTITUTE
          </span>
        </Link>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="relative inline-block hover:text-indigo-600 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#features"
              className="relative inline-block hover:text-indigo-600 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="relative inline-block hover:text-indigo-600 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative inline-block hover:text-indigo-600 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-indigo-700 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white shadow-md space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">Home</Link>
          <a href="#features" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

