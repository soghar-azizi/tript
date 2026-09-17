import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import TravelDealCard from "./TravelDealCard";
import { travelDeals } from "../components/data/UserInfo";
// import { slidesData } from "../components/data/UserInfo";



export default function TravelDeals() {
  return (
    <div>
      <div className="w-[90%] mx-auto my-20 bg-white">
        <h2 className="my-5 font-roboto font-semibold md:text-[40px]">
          Travel More, Spend Less
        </h2>

        <Swiper
          className=" my-5 box-border"
          modules={[Autoplay]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {travelDeals.map((data) => (
            <SwiperSlide className="">
              <TravelDealCard
                key={data.id}
                title={data.title}
                description={data.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
