
import DealSwiper from "../../Ui/DealSwiper";
import { favoritGuestRooms } from "../data/UserInfo";
const favoritGustRoom = favoritGuestRooms; 

export function GuestsFavoritRooms() {
  return (
    <div className="my-12">
      <div className="w-[90%] mx-auto my-3">
        <DealSwiper
          className="bg-amber-white"
          data={favoritGustRoom}
          title={"Homes Guests Love"}
        />
      </div>
    </div>
  );
}