import React, { useState } from "react";
import sampleCars from "./Sample";
import CarsCard from "../SharedComponents/CarsCard";

export default function CarsGrid() {
  const handleOrderClick = (car) => {
    alert(`Order placed for ${car.name} ${car.model}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Premium Cars Collection
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleCars.map((car) => (
            <CarsCard key={car.id} car={car} onOrderClick={handleOrderClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
