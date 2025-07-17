import React from "react";
import { Calendar, Gauge, Fuel } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeBrand() {
  const cars = [
    {
      name: "Jimny",
      tagline: "Experience the Ultimate Off-Roader",
      modelYear: "2024",
      kmsRan: "12,450 km",
      fuelType: "Petrol",
      mileage: "15.75 kmpl",
      power: "101 hp",
      image: "Uploads/5603b2f2-7561-4a6f-a318-7961aa3b0462.jpg",
    },
    {
      name: "Epic Swift",
      tagline: "Time To Go #SWIFTING",
      modelYear: "2023",
      kmsRan: "18,200 km",
      fuelType: "Petrol",
      mileage: "25.75 kmpl",
      power: "81.58 ps",
      image: "Uploads/2_z_hxwZNFd.png",
    },
    {
      name: "All New Dzire",
      tagline: "Safest Compact Sedan",
      modelYear: "2024",
      kmsRan: "8,750 km",
      fuelType: "Petrol",
      mileage: "23.26 kmpl",
      power: "89 ps",
      image: "Uploads/DSC_5903.webp",
    },
    {
      name: "Grand Vitara",
      tagline: "Bold SUV for Every Journey",
      modelYear: "2023",
      kmsRan: "15,600 km",
      fuelType: "Hybrid",
      mileage: "21.1 kmpl",
      power: "103 hp",
      image: "Uploads/0x0.webp",
    },
    {
      name: "Baleno",
      tagline: "Premium Hatchback for You",
      modelYear: "2024",
      kmsRan: "5,920 km",
      fuelType: "Petrol",
      mileage: "22.3 kmpl",
      power: "90 ps",
      image:
        "https://images.unsplash.com/photo-1603366909644-d450be5b0c27?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ciaz",
      tagline: "Executive Luxury Sedan",
      modelYear: "2023",
      kmsRan: "22,100 km",
      fuelType: "Diesel",
      mileage: "20.4 kmpl",
      power: "105 hp",
      image:
        "https://images.unsplash.com/photo-1571607389380-6570ae3c5c46?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getFuelTypeColor = (fuelType) => {
    switch (fuelType.toLowerCase()) {
      case "petrol":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "diesel":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "hybrid":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            DISCOVER OUR RANGE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Explore our premium collection of vehicles designed for every
            journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory sm:overflow-visible">
          {cars.map((car, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 snap-center flex-shrink-0 w-80 sm:w-auto transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-52 object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getFuelTypeColor(
                      car.fuelType
                    )}`}
                  >
                    {car.fuelType}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    {car.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {car.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Model Year
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {car.modelYear}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Kms Ran
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {car.kmsRan}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Fuel className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Fuel Type
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {car.fuelType}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <div className="text-center">
                      <p className="font-semibold text-gray-700">Mileage</p>
                      <p className="text-blue-600 font-bold">{car.mileage}</p>
                    </div>
                    <div className="w-px h-8 bg-gray-300"></div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-700">Power</p>
                      <p className="text-blue-600 font-bold">{car.power}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center my-12">
          <Link to="/cars">
            <button className="text-lg md:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
