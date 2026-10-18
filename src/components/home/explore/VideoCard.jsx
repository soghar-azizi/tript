export default function VideoCard({ image, name, videoUrl, star, onPlay }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className=" h-full rounded-lg overflow-hidden flex flex-col justify-end bg-cover bg-center "
    >
      <div className="flex flex-1 items-end justify-center">
        <button
          onClick={() => onPlay(videoUrl)}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer"
        >
          <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full"
            >
              <path d="M10.1456 6L0 0V12L10.1456 6Z" fill="#0057FF" />
            </svg>
          </div>
        </button>
      </div>

      <div className="bg-linear-to-t  from-black/80 to-transparent p-2">
        <p className="font-medium font-roboto text-white md:text-[18px] p-2">
          {name}
        </p>

        <img src={star} alt={name} />
      </div>
    </div>
  );
}
