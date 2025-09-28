import React from "react";
const testimonials = [
  {
    name: "Aarav Sharma",
    review:
      "IELTS Pro helped me improve my band from 6.5 to 8.0 in just 4 weeks! The mock tests and AI feedback are amazing.",
    location: "Hyderabad, India",
  },
  {
    name: "Ricky",
    review:
      "The speaking practice sessions and live classes made all the difference. Highly recommend!",
    location: "Mumbai, India",
  },
  {
    name: "James son",
    review:
      "Super helpful platform with smart tools. The AI scoring system is a game changer.",
    location: "London, UK",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Students Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-4 italic">"{t.review}"</p>
              <div className="text-sm font-semibold text-indigo-600">
                {t.name}
              </div>
              <div className="text-xs text-gray-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;