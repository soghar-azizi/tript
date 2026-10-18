import { useState } from "react";
import { GuestContext } from "./GuestContext";

export function GuestProvider({ children }) {
  const [countAdult, setCountAdult] = useState(1);
  const [countChildren, setCountChildren] = useState(0);
  const [countPets, setCountPets] = useState(0);
  const [room, setRoom] = useState(1);

  return (
    <GuestContext.Provider
      value={{
        countAdult,
        setCountAdult,
        countChildren,
        setCountChildren,
        countPets,
        setCountPets,
        room,
        setRoom,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
}
