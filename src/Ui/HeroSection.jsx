
import HeroImage from "../assets/imges/Hero.png";
import HotelFeature from "./HotelFeature";
import HotelLocation from "./HotelLocation";

export default function HeroSection() {
  return (
    <div
      className="relative flex flex-col items-center gap-5 py-32 md:py-30"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text stays vertically centered */}
      <div className="flex flex-col items-center gap-5 md:absolute top-1/2 -translate-y-1/2 ">
        <h1 className="font-semibold text-2xl md:text-[40px] text-white font-[Roboto]">
          Your Trip Starts Here
        </h1>

        <h2 className="text-lg md:text-[28px] font-semibold text-white font-[Roboto] text-center">
          Find unique stays across hotels, villas, and more
        </h2>
      </div>

      <HotelFeature />
      <HotelLocation />
    </div>
  );
}
// export default function HeroSection() {
//   return (
//     <div
//       className="flex flex-col items-center gap-5 py-32 md:py-20 "
//       style={{
//         backgroundImage: `url(${HeroImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <h1 className="font-semibold text-2xl md:text-[40px] text-white font-roboto  ">
//         Your Trip Starts Here
//       </h1>

//       <h2 className="text-lg md:text-[28px] font-semibold text-white font-roboto text-center">
//         Find unique stays across hotels, villas, and more
//       </h2>

//       <HotelFeature />
//       <HotelLocation />
//     </div>
//   );
// }