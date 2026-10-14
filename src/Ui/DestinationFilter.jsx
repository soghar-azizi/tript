export function DestinationFilter({ icon,filterBy,onClick ,active}) {
  return (
    <button onClick={onClick} className={`flex justify-center hover:bg-light-grey ease-in  items-center gap-2 text-black py-1 px-3 border border-black rounded-4xl w-fit md:text-[16px] ${active ? "bg-black text-white" : ""}`}>
      <span >{icon}</span>
      <span>{filterBy}</span>
    </button>
  );
}
