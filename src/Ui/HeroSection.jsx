
import { useState, useEffect } from "react";

import HeroImage1 from "../assets/imges/Hero.png";
import HeroImage2 from "../assets/imges/summer-1.jpg";
import HeroImage3 from "../assets/imges/summer-2.jpg";
import HeroImage4 from "../assets/imges/view-4.jpg";
import HeroImage5 from "../assets/imges/view-5.jpg";
import HotelFeature from "./HotelFeature";
import HotelLocation from "./HotelLocation";
import { GuestProvider } from "./GuestContext";
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropDown, setdropDown] = useState(false);
  const heroImages = [
    HeroImage1,
    HeroImage2,
    HeroImage3,
    HeroImage4,
    HeroImage5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevItem) =>
        prevItem === heroImages.length - 1 ? 0 : prevItem + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center gap-5 py-32 md:py-30 rounded-b-4xl ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 rounded-b-4xl ease-in-out"
        style={{
          backgroundImage: `url(${heroImages[currentIndex]})`,
        }}
      />

      <div className="absolute inset-0 bg-black/30 rounded-b-4xl" />

      <div className="relative z-10 flex flex-col items-center gap-5 md:absolute top-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-2xl md:text-[40px] text-white font-[Roboto]">
          Your Trip Starts Here
        </h1>

        <h2 className="text-lg md:text-[28px] font-semibold text-white font-[Roboto] text-center">
          Find unique stays across hotels, villas, and more
        </h2>
      </div>
      {/* other content */}
      <HotelFeature setdropDown={setdropDown}/>
      <GuestProvider>

      <HotelLocation dropDown={dropDown} setdropDown={setdropDown} />
      </GuestProvider>
    </div>
  );
}
