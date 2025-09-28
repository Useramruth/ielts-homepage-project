import React from "react";

const features = [
  { title: "Speaking Practice", desc: "Daily speaking practice with peer groups and expert feedback.", icon: "🗣️" },
  { title: "Mock Tests", desc: "Simulated IELTS tests to track your progress realistically.", icon: "📝" },
  { title: "AI Band Score", desc: "Instant writing & speaking score estimation using AI.", icon: "🤖" },
  { title: "Live Classes", desc: "Join our live sessions with certified IELTS trainers.", icon: "🎥" },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;