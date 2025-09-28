import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="text-2xl font-bold text-indigo-600">
            IELTS INSTITUTE
          </span>
        </a>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-indigo-600">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-indigo-600">Features</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
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
          <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-600">Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-600">Features</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-600">Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;