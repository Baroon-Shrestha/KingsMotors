import React from "react";

export default function CarsHero() {
  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage:
          //   "url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop')",
          "url(https://images.unsplash.com/photo-1643142314913-0cf633d9bbb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnMlMjBkZWFsZXJzaGlwfGVufDB8fDB8fHww)",
      }}
    >
      <div className="absolute bottom-0 w-full">
        <div className="backdrop-blur-md bg-black/10 py-16 px-6 md:px-0">
          <div className="container mx-auto">
            <div className="text-2xl md:text-3xl font-extrabold text-white">
              Premium Second Hand Cars
            </div>
            <div className="max-w-3xl text-base md:text-xl font-extralight text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              laboriosam necessitatibus repellendus temporibus cum iusto sint
              nostrum eum eveniet veritatis at, repellat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
