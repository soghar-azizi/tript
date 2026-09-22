export function AppStoreButton({ icon, name, info }) {
  return (
    <button className="flex items-center mt-2 justify-center gap-1 bg-white/20 rounded-md px-1 py-1 w-[40%]">
      <div className="w-[20%] ">{icon}</div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[10px] leading-3 truncate">{info}</p>

        <p className="leading-3.5">
          <b className="text-sm font-semibold">{name}</b>
        </p>
      </div>
    </button>
  );
}
