import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", contactForm);
    alert("Thank you for contacting us!");
    setContactForm({ name: "", email: "", message: "" });
  };
  return (
    <footer id="contact" className="bg-indigo-600 text-white py-14 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Left Column: About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">IELTS INSTITUTE</h3>
          <p className="text-sm mb-4">
            Your trusted partner for IELTS preparation. Join thousands of
            successful students around the world.
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@ieltsinstitute.com"
              className="underline"
            >
              support@ieltsinstitute.com
            </a>
          </p>
          <p>Phone: +91 9990001919</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              {/* Instagram */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              {/* Twitter */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 19c7.18 0 11.1-5.94 11.1-11.1v-.5A7.93 7.93 0 0022 5.5a7.87 7.87 0 01-2.25.62A3.93 3.93 0 0021.4 4c-1.47.87-3.09 1.5-4.8 1.8a3.93 3.93 0 00-6.7 3.6C7.14 9.28 5 8.2 3.6 6.5a3.93 3.93 0 001.2 5.2 3.93 3.93 0 01-1.8-.5v.05a3.93 3.93 0 003.15 3.85 3.93 3.93 0 01-1.8.07 3.93 3.93 0 003.7 2.75A7.87 7.87 0 012 18a11.1 11.1 0 006 1.75" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              {/* Facebook */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.7 9.87v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              {/* LinkedIn */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3a2 2 0 110 4 2 2 0 010-4zM4 8h2v12H4zm5 0h2v1.7c.3-.5.9-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6V20h-2v-6c0-1.1-.4-2-1.4-2s-1.6.9-1.6 2v6H9z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Middle Column: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                onClick={handleHomeClick}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right Column: Contact Form */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <input
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <textarea
              name="message"
              value={contactForm.message}
              onChange={handleChange}
              rows="3"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-gray-200 mt-12">
        © {new Date().getFullYear()} IELTS INSTITUTE. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;