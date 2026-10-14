import { useState } from "react";
import { videos } from "../components/data/UserInfo";
import exploreTripo1 from "../assets/imges/explore-tripo-1.jpg";
import SearchButton from "./SearchButton";
import WatchRoom from "./WatchRoom";
import SliderExploreHouse from "./ExploreHouseSlider";

export default function ExploreTripo() {
  const [play, setPlay] = useState(null);
  const [show, setShow] = useState(null);
  function showMore() {
    setShow(true);
  }
  function getUrl(url) {
    setPlay(url);
  }

  function closeVideo() {
    setPlay(null);
  }
  function closeExploe() {
    setShow(null);
  }

  return (
    <div className="bg-light-grey py-10">
      <div className="w-[90%] mx-auto py-5">
        {/* Heading */}
        <h2 className="font-roboto font-semibold md:text-[40px]">
          Explore Tripto in Motion
        </h2>
        <div className="grid grid-cols-1 gap-3 my-3 min-[540px]:grid-cols-3 md:grid-cols-3 md:h-150">
          <div
            className="min-[540px]:col-span-3 md:col-span-2 h-75
      min-[540px]:h-80 md:h-full
       flex bg-cover
      bg-center
      rounded-xl
      overflow-hidden
      border-10
      border-[#99BDFF]
    "
            style={{
              backgroundImage: `url(${exploreTripo1})`,
            }}
          >
            <div className="m-3 flex flex-col justify-center gap-4 md:p-15">
              <h2 className="font-extrabold text-white font-roboto lg:text-[64px]">
                Step Into a world of Luxury
              </h2>
              <p className="font-roboto font-semibold text-white lg:text-[28px]">
                Immerse yourself in captivating visuals from our most iconic and
                indulgent destinations
              </p>
              {!show ? (
                <SearchButton
                  className="bg-primary text-[10px] p-1.5 flex gap-2 sm:p-3 md:text-[15px] w-fit rounded-lg justify-center items-center text-white"
                  name="Explore All Videos"
                  onClick={showMore}
                />
              ) : (
                <button
                  className="bg-primary text-[10px] p-1.5 flex gap-2 sm:p-3 md:text-[15px] w-fit rounded-lg justify-center items-center text-white"
                  name="Expent"
                  onClick={closeExploe}
                >
                  Show Less
                </button>
              )}
            </div>
          </div>

          <div
            className="
      col-span-1
      min-[540px]:col-span-3
      md:col-span-1
      grid
      grid-cols-1
      min-[540px]:grid-cols-3
      md:grid-cols-1
      gap-3
      md:grid-rows-3
    "
          >
            {videos.slice(0, 3).map((video) => (
              <WatchRoom
                key={video.id}
                image={video.image}
                star={video.star}
                videoUrl={video.videoUrl}
                name={video.name}
                onPlay={getUrl}
              />
            ))}
          </div>
        </div>
      </div>
      {show && <SliderExploreHouse onPlay={getUrl} />}
      {play && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-5 z-50 ">
          <div className="relative max-w-4xl w-full aspect-video rounded-xl ">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-[50%] text-2xl flex items-center justify-center cursor-pointer"
            >
              ❌
            </button>
            <iframe
              className="w-full h-full rounded-xl"
              src={play}
              frameborder="0"
              title="Tripto video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
