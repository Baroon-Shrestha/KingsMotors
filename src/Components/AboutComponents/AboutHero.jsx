import React from "react";

export default function AboutHero() {
  return (
    <section className="relative bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605559424843-2bb8ee4b1a06?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
          ABOUT KINGS MOTORS
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Pioneering luxury, performance, and innovation in the automotive
          world. Discover our journey and passion for redefining driving
          experiences.
        </p>
      </div>
    </section>
  );
}
