
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

import { testimonials } from "../components/data/UserInfo";

import { useEffect, useRef, useState } from "react";

const slide = testimonials;

export function HotelIdeasMobile() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slide.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    swiperRef.current?.slideTo(currentIndex);
  }, [currentIndex]);

  return (
    <div className="w-[90%] mx-auto py-8 bg-light-grey">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slide.map((card) => (
          <SwiperSlide
            key={card.id}
            className="bg-amber-50"
          >
            <div className="flex flex-col justify-center gap-2 py-6">
              <img
                src={card.image}
                alt={card.name}
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />

              <div className="flex flex-col justify-center items-center text-center w-[90%] gap-1.5 mx-auto">
                <p>{card.comment}</p>

                <p className="font-semibold">
                  {card.name}
                </p>

                <div className="flex items-center justify-center gap-2">
                  <img
                    src={card.flag}
                    alt={card.country}
                    className="w-5"
                  />

                  <span>{card.country}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
;
