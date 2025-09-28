import React, { useState } from "react";

const Footer = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

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
        <div>
          <h3 className="text-2xl font-bold mb-4">IELTS INSTITUTE</h3>
          <p className="text-sm mb-4">
            Your trusted partner for IELTS preparation. Join thousands of successful students around the world.
          </p>
          <p>Email: <a href="mailto:support@ieltsinstitute.com" className="underline">support@ieltsinstitute.com</a></p>
          <p>Phone: +91 9990001919</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" value={contactForm.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 rounded-md text-black" />
            <input type="email" name="email" value={contactForm.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 rounded-md text-black" />
            <textarea name="message" value={contactForm.message} onChange={handleChange} rows="3" placeholder="Your Message" required className="w-full px-4 py-2 rounded-md text-black" />
            <button type="submit" className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">Send Message</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-gray-200 mt-12">
        ©️ {new Date().getFullYear()} IELTS INSTITUTE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;