import GuestCounterRow from "./GuestCounterRow";
import CloseButton from "../../common/CloseButton";
import AddRoomButton from "./AddRoomButton";
export default function GuestCounter({ setShowCountGuest }) {
  return (
    <div
      className=" bg-red absolute top-full righ-0  left-2/2 -translate-x-3/2 mt-2
        z-100 w-[95%] md:max-w-[300px]
        bg-white rounded-2xl
        shadow-[0_5px_25px_rgba(0,0,0,0.18)]
        border justify-end text-end border-light-grey p-6"
    >
      <CloseButton
        onClick={() => setShowCountGuest(false)}
        className={"text-grey-lighter cursor-pointer justify-self-end text-end"}
      />
      <div className="flex flex-col gap-3 my-2">
        <GuestCounterRow name={"Adults"} condition={"Age + 17"} />

        <GuestCounterRow name={"Children"} condition={"Age 0 to 17"} />

        <GuestCounterRow name={"Pets"} />
      </div>
      <AddRoomButton />
    </div>
  );
}
