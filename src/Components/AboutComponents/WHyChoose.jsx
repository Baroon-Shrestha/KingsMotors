import React from "react";

export default function WHyChoose() {
  const features = [
    {
      icon: "🚗",
      title: "Premium Vehicles",
      description:
        "Experience luxury and performance like never before with our handpicked range of cars.",
    },
    {
      icon: "⚡",
      title: "Fast Service",
      description:
        "We value your time with quick, reliable, and professional service for all your needs.",
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description:
        "Recognized globally for excellence in design, innovation, and customer satisfaction.",
    },
    {
      icon: "🤝",
      title: "Trusted By Thousands",
      description:
        "Join our family of satisfied customers who trust us for their automotive journey.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Choose Kings Motors?
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-10"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          At Kings Motors, we’re more than just a dealership. We’re your partner
          for an extraordinary driving experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
