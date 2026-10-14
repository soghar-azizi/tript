import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Ui/Header";

export default function AppLayout() {
  const location = useLocation();
  const type =
    location.pathname === "/search"
      ? "search"
      : location.pathname === "/logIn"
        ? "login"
        : "home";

  return (
    <>
      <Header type={type} />
      <Outlet />
    </>
  );
}