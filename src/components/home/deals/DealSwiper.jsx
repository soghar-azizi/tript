
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

import DealCard from "./DealCard";

// ================================= DealSwiper ================================

export default function DealSwiper({ data, title }) {
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
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">{title}</h2>

        {/* Navigation buttons */}
        <div className="flex gap-3">
          <button
            className="bg-white hover:text-light-grey rounded-full w-10 h-10 flex items-center border border-medium-grey justify-center"
            ref={prevDeal}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3414 19.9041C15.5334 19.9007 15.7241 19.8244 15.8676 19.6749C16.1554 19.3768 16.1471 18.9018 15.849 18.614L9.26713 12.2579L15.6232 5.67603C15.911 5.37796 15.9028 4.903 15.6047 4.61515C15.3066 4.32731 14.8317 4.3356 14.5438 4.63367L7.66704 11.7548C7.3792 12.0528 7.38749 12.5278 7.68556 12.8156L14.8067 19.6924C14.9562 19.8378 15.1495 19.9074 15.3414 19.9041Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button
            className="bg-white hover:text-light-grey rounded-full border border-medium-grey w-10 h-10 flex items-center justify-center"
            ref={nextDeal}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.749779 15.5017C0.557779 15.5017 0.36575 15.4288 0.21975 15.2818C-0.07325 14.9888 -0.07325 14.5137 0.21975 14.2207L6.68972 7.75076L0.21975 1.28079C-0.07325 0.987785 -0.07325 0.51275 0.21975 0.21975C0.51275 -0.07325 0.987785 -0.07325 1.28079 0.21975L8.28079 7.21975C8.57379 7.51275 8.57379 7.98779 8.28079 8.28079L1.28079 15.2808C1.13379 15.4288 0.941779 15.5017 0.749779 15.5017Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

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
          <SwiperSlide className="" key={item.id}>
            <DealCard
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
    </>
  );
}
