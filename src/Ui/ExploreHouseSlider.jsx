
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { videos } from "../components/data/UserInfo";
import WatchRoom from "./WatchRoom";

export default function SliderExploreHouse({ onPlay }) {
  return (
    <div className="w-[90%] h-50 mb-5 mx-auto">
      <Swiper
      initialSlide={2}
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <WatchRoom
              image={video.image}
              star={video.star}
              videoUrl={video.videoUrl}
              name={video.name}
              onPlay={onPlay}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
;
