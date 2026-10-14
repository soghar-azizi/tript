import { useGuest } from "./GuestContext";
export default function AddBtn() {
  const {setRoom}=useGuest();
  return (
    <button onClick={()=>setRoom(prev=>prev+1)} className="text-medium-blue cursor-pointer border-medium-blue border-2 w-[65%] py-1 mt-2 px-2 rounded-xl">
      <i class="fa-solid fa-plus"></i>
      <span className="font-medium font-roboto ">Add Room</span>
    </button>
  );
}
