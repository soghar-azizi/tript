import { useGuest } from "../../../context/GuestContext";
export default function AddRoomButton() {
  const {setRoom}=useGuest();
  return (
    <button onClick={()=>setRoom(prev=>prev+1)} className="text-medium-blue cursor-pointer border-medium-blue border-2 w-[65%] py-1 mt-2 px-2 rounded-xl">
      <i className="fa-solid fa-plus"></i>
      <span className="font-medium font-roboto ">Add Room</span>
    </button>
  );
}
