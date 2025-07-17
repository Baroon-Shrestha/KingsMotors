import React from "react";
import HomeHero from "./HomeHero";
import HomeBrand from "./Homebarnd";
import HomeLocation from "./HomeLocation";
import HomeWhy from "./HomeWhy";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <HomeBrand />
      <HomeWhy />
      <HomeLocation />
    </div>
  );
}
