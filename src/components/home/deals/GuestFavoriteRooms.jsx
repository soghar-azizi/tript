import DealSwiper from "./DealSwiper";
import { favoriteGuestRooms } from "../../../data/mockData";

export function GuestFavoriteRooms() {
  return (
    <div className="my-12">
      <div className="w-[90%] mx-auto my-3">
        <DealSwiper
          data={favoriteGuestRooms}
          title={"Homes Guests Love"}
        />
      </div>
    </div>
  );
}
