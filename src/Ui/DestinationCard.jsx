
export function DestinationCard({ bgImage,city, country, price, description,className }) {
  return (
    <div
      className="bg:cover  bg-center overflow-hidden rounded-xl flex  items-start justify-start relative z-9  gap-2 py-3 px-5 h-full bg-linear-to-t from-black to-transparent "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/80 to-transparent "></div>
      <div className={className}>
        <p className="font-roboto font-semibold text-white">
          {city},{country}
        </p>
        <p className="font-medium font-roboto">
          {" "}
          <span className="text-white">From</span>
          <span className="text-yellow-meduim"> @{price}/night</span>
        </p>
        <p className="font-roboto font-normal text-white">{description}</p>
      </div>
    </div>
  );
}

