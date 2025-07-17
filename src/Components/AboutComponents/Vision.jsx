import React from "react";

export default function Vision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Vision
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>

        {/* Vision Text */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Kings Motors, our vision is to redefine the driving experience by
          combining cutting-edge technology, sustainable practices, and
          timeless design. We aspire to lead the automotive industry in
          innovation and luxury, making every journey unforgettable.
        </p>

        {/* Vision Images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div className="flex justify-center">
            <img
              src="/Uploads/DSC_5903.webp"
              alt="Vision Car 1"
              className="rounded-2xl shadow-xl w-full max-w-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Second Image */}
          <div className="flex justify-center">
            <img
              src="/Uploads/DSC_5903.webp"
              alt="Vision Car 2"
              className="rounded-2xl shadow-xl w-full max-w-lg transition-transform duration-300 hover:scale-105"

            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
