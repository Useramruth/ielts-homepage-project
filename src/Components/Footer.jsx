import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scrolling or navigation
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
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
        {/* Left: About + Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4">IELTS INSTITUTE</h3>
          <p className="text-sm mb-2">
            Your trusted partner for IELTS preparation. Join thousands of successful students around the world.
          </p>
          <p className="flex items-center gap-2 mb-1">
            📧 <a href="mailto:support@ieltsinstitute.com" className="underline">support@ieltsinstitute.com</a>
          </p>
          <p className="flex items-center gap-2 mb-2">
            📞 +91 9990001919
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 text-lg"><FaInstagram /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-lg"><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 text-lg"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => handleScroll("home")} className="hover:underline">Home</button></li>
            <li><button onClick={() => handleScroll("features")} className="hover:underline">Features</button></li>
            <li><button onClick={() => handleScroll("testimonials")} className="hover:underline">Testimonials</button></li>
            <li><button onClick={() => handleScroll("contact")} className="hover:underline">Contact</button></li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" value={contactForm.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 rounded-md text-black" />
            <input type="email" name="email" value={contactForm.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 rounded-md text-black" />
            <textarea name="message" value={contactForm.message} onChange={handleChange} rows="3" placeholder="Your Message" required className="w-full px-4 py-2 rounded-md text-black" />
            <button type="submit" className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition w-full">Send Message</button>
          </form>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-xs text-gray-200 mt-12">
        ©️ {new Date().getFullYear()} IELTS INSTITUTE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;