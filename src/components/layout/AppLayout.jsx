import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Ui/Header";

// export default function AppLayout() {
//   const location = useLocation();

//   console.log("pathname:", location.pathname);

//   const type =
//     location.pathname === "/search"
//       ? "search"
//       : location.pathname === "/login"
//         ? "login"
//         : "home";

//   console.log("type:", type);

//   return (
//     <>
//       <Header type={type} />
//       <Outlet />
//     </>
//   );
// }
export default function AppLayout() {
  const location = useLocation();

  console.log("FULL LOCATION:", location);
  console.log("PATH:", location.pathname);

  const type =
    location.pathname === "/search"
      ? "search"
      : location.pathname === "/logIn"
        ? "login"
        : "home";

  console.log("TYPE:", type);

  return (
    <>
      <Header type={type} />
      <Outlet />
    </>
  );
}