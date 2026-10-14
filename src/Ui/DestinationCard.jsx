
export function DestinationCard({
  bgImage,
  city,
  country,
  price,
  description,
  className = "",
}) {
  return (
    <div
      className="
        bg-cover bg-center overflow-hidden rounded-xl
        flex items-start justify-start relative
        gap-2 py-3 px-5 h-full
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="
          absolute inset-0
          bg-linear-to-t from-black/80 via-black/20 to-transparent
          z-0
        "
      />
      <div className={`relative z-10 ${className}`}>
        <p className="font-roboto font-semibold text-white">
          {city}, {country}
        </p>

        <p className="font-medium font-roboto">
          <span className="text-white">From </span>
          <span className="text-yellow-meduim">
            @{price}/night
          </span>
        </p>

        <p className="font-roboto font-normal text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
