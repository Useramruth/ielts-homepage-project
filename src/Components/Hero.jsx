import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="bg-indigo-100 text-indigo-800 text-center py-2 px-4 font-semibold">
        🎉 New IELTS Batch Starts Oct 1st – Enroll Now & Save 25%!
      </div>
      <section id="home" className="bg-gray-50">
        <div className="pt-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Master Your IELTS with Confidence
            </h1>
            <p className="text-gray-600 mb-6">
              Join 10,000+ students improving their scores with expert-led courses and smart tools.
            </p>
            <a href="#get-started">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
                Get Started
              </button>
            </a>
          </div>
          <div>
            <img
              src={logo}
              alt="IELTS Institute"
              className="w-40 h-40 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;