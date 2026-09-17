// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { useRef } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// // import { slidesData } from "../components/data/UserInfo";
// import DealsCard from "./DealsCards";
// import { useState } from "react";
// import { useEffect } from "react";

// // ================================= DealSwiper ================================
// export default function DealSwiper({ data, renderCard }) {
//   const [swiper, setSwiper] = useState(null);
//   const prevDeal = useRef(null);
//   const nextDeal = useRef(null);
//   // =================================== useEffect ================================
//   useEffect(() => {
//     if (!swiper) return;
//     swiper.params.navigation.prevEl = prevDeal.current;
//     swiper.params.navigation.nextEl = nextDeal.current;
//     swiper.navigation.init();
//     swiper.navigation.update();
//   }, [swiper]);

//   return (
//     <div className="bg-medium-grey py-15">
//       <div className="w-9/10 mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-semibold">Deals for the Weekend</h2>

//           <div className="flex gap-3">
//             <button
//               className=" bg-white rounded-full w-10 h-10 flex items-center justify-center"
//               ref={prevDeal}
//             >
//               &lt;
//             </button>

//             <button
//               className=" bg-white rounded-full w-10 h-10 flex items-center justify-center"
//               ref={nextDeal}
//             >
//               &gt;
//             </button>
//           </div>
//         </div>

//         {/* Swiper */}
//         <Swiper
//           onSwiper={setSwiper}
//           modules={[Navigation]}
//           spaceBetween={15}
//           slidesPerView={1}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 4,
//             },
//           }}
//         >
//           {data.map((item) => (
//             <SwiperSlide key={item.id}>
//               <DealsCard
//                 bgImage={item.image}
//                 rating={item.rating}
//                 review={item.review}
//                 viewers={item.viewers}
//                 name={item.name}
//                 location={item.location}
//                 pricePerNight={item.pricePerNight}
//                 oldPrice={item.oldPrice}
//                 totalPrice={item.totalPrice}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

import DealsCard from "./DealsCards";

// ================================= DealSwiper ================================

export default function DealSwiper({ data }) {
  console.log("Hello", data);
  const [swiper, setSwiper] = useState(null);

  const prevDeal = useRef(null);
  const nextDeal = useRef(null);

  // =================================== useEffect ================================

  useEffect(() => {
    if (!swiper) return;

    swiper.params.navigation.prevEl = prevDeal.current;
    swiper.params.navigation.nextEl = nextDeal.current;

    swiper.navigation.init();
    swiper.navigation.update();
  }, [swiper]);

  return (
    <div className="bg-medium-grey py-15">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Deals for the Weekend</h2>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            <button
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
              ref={prevDeal}
            >
              &lt;
            </button>

            <button
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
              ref={nextDeal}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <DealsCard
                bgImage={item.image}
                rating={item.rating}
                review={item.review}
                viewers={item.viewers}
                name={item.name}
                location={item.location}
                pricePerNight={item.pricePerNight}
                oldPrice={item.oldPrice}
                totalPrice={item.totalPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
