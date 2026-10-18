import { useGuest } from "../../../context/GuestContext";
// =============== show Guest =================
export default function GuestCounterRow({ name, condition }) {
  const {
    countAdult,
    setCountAdult,
    countChildren,
    setCountChildren,
    countPets,
    setCountPets,
  } = useGuest();

  const count =
    name === "Adults"
      ? countAdult
      : name === "Children"
        ? countChildren
        : countPets;
  const setCount =
    name === "Adults"
      ? setCountAdult
      : name === "Children"
        ? setCountChildren
        : setCountPets;

  return (
    <div className="text-start">
      <div className="flex justify-between items-end">
        <p className="font-medium font-roboto">{name}</p>

        <div className="flex items-center justify-between gap-3  text-light-grey">
          <button
            className="border-light-grey border rounded-full p-1 px-1.5"
            onClick={() =>
              setCount((prev) => Math.max(name === "Adults" ? 1 : 0, prev - 1))
            }
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <p className="text-grey-lighter">{count}</p>
          <button
            className="border-light-grey border rounded-full p-1 px-1.5"
            onClick={() => setCount((next) => next + 1)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      <div>
        <p className="text-grey-lighter font-roboto text-sm font-normal">
          {condition}
        </p>
      </div>
    </div>
  );
}
