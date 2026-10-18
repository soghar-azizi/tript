import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";

export default function AppLayout() {
  const location = useLocation();
  const type =
    location.pathname === "/search"
      ? "search"
      : location.pathname === "/login"
        ? "login"
        : "home";

  return (
    <>
      <Header type={type} />
      <Outlet />
    </>
  );
}