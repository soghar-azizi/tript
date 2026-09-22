
import SearchButton from "./SearchButton"
// ==================================================== Hotel Features =================================================
export default function HotelLocation() {
  return (

    <div className="w-[80%] flex flex-col gap-8 md:flex-row md:items-center md:gap-4 md:justify-between relative top-50 rounded-2xl px-5  mx-auto z-10 bg-white pt-14 pb-8 md:px-12 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
      <div className="text-base font-[Roboto] font-Medium">
        <b className="text-dark-grey">Location</b>
        <p className="text-grey-lighter">Where are you going</p>
      </div>

      <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-3 ">
        <div className="border-l border-light-grey  px-3 text-base font-medium font-roboto">
          <b className="text-dark-grey">Check In</b>
          <p className="text-grey-lighter">Add Dates</p>
        </div>

        <div className="border-l border-light-grey px-3 text-base font-medium font-roboto">
          <b className="text-dark-grey">Check Out</b>
          <p className="text-grey-lighter">Add Dates</p>
        </div>

        <div className="border-l border-light-grey px-3 text-base font-medium font-roboto">
          <b className="text-dark-grey">Rooms and Guests</b>
          <p className="text-grey-lighter">
            <span>1 romms ,</span>
            <span>1 adualts ,</span>
            <span>0 children</span>
          </p>
        </div>
      </div>

      <SearchButton className="bg-primary border-0 p-3 rounded-xl text-white flex items-center gap-2" name="Search" />
    </div>
  );
}
