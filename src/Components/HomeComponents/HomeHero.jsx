import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/Uploads/img1.jpeg",
      subtitle: "Luxury, Power & Style in Every Ride",
      description:
        "Experience the ultimate in automotive excellence with our premium collection",
      buttonText: "Explore Cars",
      buttonLink: "/our-cars",
    },
    {
      id: 2,
      image: "/Uploads/img2.jpeg",
      subtitle: "Time To Go #SWIFTING",
      description:
        "Discover the perfect blend of efficiency and style in our Swift collection",
      buttonText: "Test Drive",
      buttonLink: "/test-drive",
    },
    {
      id: 3,
      image: "/Uploads/img3.jpeg",
      subtitle: "Redefining Comfort & Elegance",
      description:
        "Step into a world of sophistication with our luxury sedan lineup",
      buttonText: "View Collection",
      buttonLink: "/luxury-cars",
    },
    {
      id: 4,
      image: "/Uploads/img4.jpeg",
      subtitle: "Bold SUVs for Every Journey",
      description:
        "Conquer any terrain with our powerful and versatile SUV range",
      buttonText: "Explore SUVs",
      buttonLink: "/suvs",
    },
    {
      id: 5,
      image: "Uploads/img5.jpeg",
      subtitle: "Innovation Meets Performance",
      description:
        "Drive into the future with our cutting-edge automotive technology",
      buttonText: "Learn More",
      buttonLink: "/technology",
    },
  ];

  const carBrands = [
    // { name: "Toyota", logo: "/Uploads/toyota.png" },
    { name: "Honda", logo: "/Uploads/honda.png" },
    { name: "BMW", logo: "/Uploads/bmw.png" },
    { name: "Mercedes", logo: "/Uploads/mercedes.jpeg" },
    { name: "Audi", logo: "/Uploads/audi.png" },
    { name: "Ford", logo: "/Uploads/ford.jpeg" },
    { name: "Hyundai", logo: "/Uploads/hyundai.jpeg" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  // Content visibility animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsContentVisible(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  // Reset content visibility when slide changes
  useEffect(() => {
    setIsContentVisible(false);
    const timeout = setTimeout(() => {
      setIsContentVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <>
      {/* Hero Carousel Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <img
                src={slide.image}
                alt={`Kings Automobile - ${slide.subtitle}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Auto-play Control */}
        <button
          onClick={toggleAutoPlay}
          className="absolute top-6 right-6 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          {isAutoPlaying ? (
            <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div> */}

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <div
            className={`transition-all duration-1000 ease-out ${
              isContentVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg tracking-wide">
              Kings Automobile
            </h1>
            <p className="text-xl md:text-2xl font-extralight mb-2 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              {currentSlideData.subtitle}
            </p>
            <p className="text-lg md:text-xl font-light mb-8 text-gray-200 max-w-2xl mx-auto opacity-90">
              {currentSlideData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Car Brands Section */}
      <div className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Brands
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
              Discover our extensive collection of premium automotive brands
            </p>
          </div>

          {/* Infinite Horizontal Carousel */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of brands */}
              {carBrands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 group cursor-pointer"
                >
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center border border-gray-200 group-hover:border-red-200">
                    <div className="text-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-16 h-16 object-contain mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Second set of brands for infinite loop */}
              {carBrands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 group cursor-pointer"
                >
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center border border-gray-200 group-hover:border-red-200">
                    <div className="text-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-16 h-16 object-contain mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
