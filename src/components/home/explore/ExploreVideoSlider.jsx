
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { videos } from "../../../data/mockData";
import VideoCard from "./VideoCard";

export default function ExploreVideoSlider({ onPlay }) {
  return (
    <div className="w-[90%] h-60 mb-5 mx-auto">
      <Swiper
        initialSlide={2}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="
          mySwiper
          h-full
          [&_.swiper-pagination]:!bottom-0
          [&_.swiper-pagination-bullet]:!bg-gray-400
          [&_.swiper-pagination-bullet-active]:!bg-white
        "
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <VideoCard
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