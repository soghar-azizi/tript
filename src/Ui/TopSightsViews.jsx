export default function TopSightsViews({
  name,
  bgImage,
  flag,
  className = "",
}) {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`bg-cover bg-center p-4 rounded-xl h-62.5 ${className} group `}
    >
      <h2
        className="flex gap-2 font-roboto font-semibold md:text-[28px] items-center transition-all duration-500 ease-in-out group-hover:scale-130 group-hover:translate-y-2 origin-top-left"
      >
        <span>{name}</span>

        <img src={flag} alt={`${name} flag`} className="w-10 h-6.25" />
      </h2>
    </div>
  );
}
