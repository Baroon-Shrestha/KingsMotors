import React from "react";

export default function DetailsHero({ car }) {
  if (!car) return null;

  return (
    <div
      className="relative h-[40vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${car.image})`,
      }}
    >
      <div className="absolute bottom-0 w-full">
        <div className="backdrop-blur-md bg-black/10 py-16 px-6 md:px-0">
          <div className="container mx-auto">
            <div className="text-2xl md:text-3xl font-extrabold text-white">
              {car.name}
            </div>
            <div className="max-w-3xl text-base md:text-xl font-extralight text-white">
              {car.model} · {car.year} · {car.fuelType}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
