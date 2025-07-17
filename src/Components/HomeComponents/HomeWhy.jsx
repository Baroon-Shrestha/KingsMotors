import React from "react";

export default function HomeWhy() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            WHY KINGS MOTORS?
          </h2>
          <div className="w-16 h-1 bg-blue-600"></div>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
            With over two decades of experience in Nepal's automotive industry,
            Kings Motors proudly holds the title of being a leading luxury
            vehicle provider in the country. Few brands can match the level of
            trust and confidence that Nepali customers have in Kings Motors. Our
            extensive lineup of SUVs, sedans, and sports cars caters to the
            diverse needs of Nepalese customers, making it the go-to choice.
          </p>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
            Kings Motors, a renowned automotive brand with a global reputation
            for its technical innovations, has consistently delivered
            award-winning designs and cutting-edge technology. The remarkable
            Kings Motors lineup in Nepal is further enhanced with the
            introduction of premium models and modern urban vehicles,
            complementing our existing fleet. This solidifies Kings Motors'
            position as a{" "}
            <span className="font-semibold text-gray-800">
              PROMINENT LUXURY BRAND
            </span>{" "}
            in Nepal.
          </p>
        </div>

        {/* Image Section with Diagonal Cutoff */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            {/* Diagonal cutoff container */}
            <div
              className="relative overflow-hidden hidden lg:block"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {/* Modern building backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white shadow-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
                <img
                  src="/Uploads/0x0.webp"
                  alt="Luxury Vehicle"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                {/* Overlay elements to simulate modern building feel */}
                {/* <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
