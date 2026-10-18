import { createContext, useContext } from "react";

export const GuestContext = createContext(null);

export function useGuest() {
  return useContext(GuestContext);
}
