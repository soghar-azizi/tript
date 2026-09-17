
import DealSwiper from "../../Ui/DealSwiper";
import { favoritGuestRooms } from "../data/UserInfo";
const favoritGustRoom = favoritGuestRooms; 
export function GuestsFavoritRooms() {
  console.log("data")
  console.log(favoritGustRoom);
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <h2 className="font-roboto font-semibold md:text-[40px]">
          Deals for the Weekend
        </h2>

        <DealSwiper data={favoritGustRoom} />
        
      </div>
    </div>
  );
}