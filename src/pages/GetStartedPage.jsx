import React, { useState } from "react";
const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    course: "",
    skills: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Enrollment Data:", formData);
    alert("Application Submitted Successfully!");
    // Optionally: Send formData to backend/API
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-indigo-700 mb-2 text-center">
          Student Enrollment Form
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Fill in your details to apply for IELTS courses.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="+91 9999999999"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="India"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Preferred Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="">-- Select Course --</option>
              <option value="General IELTS">General IELTS</option>
              <option value="Academic IELTS">Academic IELTS</option>
              <option value="Spoken English">Artifical Inteligence Learning</option>
              <option value="Writing Coaching">Writing Coaching</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Your Skills / Background</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Mention your language background, strengths, goals, etc."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default GetStartedPage;
