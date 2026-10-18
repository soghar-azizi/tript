import { useState } from "react";

import SearchButton from "../../common/SearchButton";
import LocationDropdown from "./LocationDropdown";
import { SearchField } from "./SearchField";
import DatePickerPopup from "./DatePickerPopup";
import GuestCounter from "./GuestCounter";
import { useGuest } from "../../../context/GuestContext";
import { useNavigate } from "react-router-dom";
export default function SearchForm({ category }) {
  const [showLocation, setShowLocation] = useState(false);
  const [checkIn, setCheckIn] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [showCountGuest, setShowCountGuest] = useState(false);
  const checkInDate = dateValue?.from;
  const checkOutDate = dateValue?.to;
  const navigate=useNavigate();
  const { countAdult, countChildren, countPets ,room} = useGuest();
  

  return (
    <div className="w-[90%] md:w-[90%] grid grid-cols-1 md:grid-cols-5 gap-4 justify-between px-4 items-center relative top-50 rounded-2xl mx-auto z-10 bg-white pt-14 pb-8 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
      {/* Location */}
      <div className="w-full relative">
        <SearchField
          items={[
            "Location",
            locationName ? locationName : "Where are you going?",
          ]}
          className={`pl-3 w-full hover:bg-blue-50 rounded-md ${showLocation ? "border-medium-blue px-4 py-2 rounded-xl border-2" : ""}`}
          type="text"
          onClick={() => setShowLocation(true)}
        />

        {showLocation && (
          <LocationDropdown
            category={category}
            setShowLocation={setShowLocation}
            setLocationName={setLocationName}
          />
        )}
      </div>

      {/* Check In / Check Out / Guests */}
      <div className="grid relative grid-cols-1  md:grid-cols-[1fr_1fr_1.5fr] col-span-3 items-center gap-3">
        {/* Check In */}
        <SearchField
          items={[
            "Check In",
            checkInDate ? checkInDate.toLocaleDateString() : "Add Date",
          ]}
          className={`md:border-l hover:bg-blue-50 rounded-md ${checkIn ? "border-medium-blue px-4 py-2 rounded-xl border-2" : " border-light-grey"} px-3`}
          onClick={() => setCheckIn(true)}
        />

        {/* Check Out */}
        <SearchField
          items={[
            "Check Out",
            checkOutDate ? checkOutDate.toLocaleDateString() : "Add Dates",
          ]}
          className="md:border-l border-light-grey px-3 hover:bg-blue-100 rounded-md"
        />

        {/* Rooms and Guests */}
        <SearchField
          items={[
            "Rooms and Guests",
            `${countAdult} adults, ${countChildren} children, ${countPets} pets,${room} room`,
          ]}
          className={`md:border-l hover:bg-blue-50 rounded-md ${showCountGuest ? "border-medium-blue py-2 rounded-xl border-2" : "border-light-grey"} px-3 `}
          onClick={() => setShowCountGuest(true)}
        />
      </div>
      {/* Search Button */}
      <SearchButton
        className="bg-primary border-0 p-3 rounded-xl text-white flex items-center justify-center gap-2 w-[50%] justify-self-end"
        name="Search"
        onClick={() => navigate("/search")}
      />
      {checkIn && (
        <DatePickerPopup
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
      )}
      {showCountGuest && <GuestCounter setShowCountGuest={setShowCountGuest} />}
    </div>
  );
}
