
// ================================= Library =================================
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ================================= Pages =================================
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import HelpCenter from "./components/pages/HelpCenter";
import Payment from "./components/pages/Payment";
import Profile from "./components/pages/Profile";
import PagesNotFound from "./components/pages/PagesNotFound";
import HotelDetails from "./components/pages/HotelDetails";
import SearchResults from "./components/pages/SearchResults";

// ================================= Components =================================
import AppLayout from "./components/layout/AppLayout";

// ================================= Router =================================
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "helpCenter", element: <HelpCenter /> },
      { path: "hotelDetails", element: <HotelDetails /> },
      { path: "payment", element: <Payment /> },
      { path: "profile", element: <Profile /> },
      { path: "pagesNotFound", element: <PagesNotFound /> },
      { path: "search", element: <SearchResults /> },
    ],
  },
]);

// ================================= App =================================
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return <RouterProvider router={router} />;
}
;
