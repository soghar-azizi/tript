
// ================================= Library =================================
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ================================= Pages =================================
import Home from "./pages/Home";
import Login from "./pages/Login";
import HelpCenter from "./pages/HelpCenter";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import HotelDetails from "./pages/HotelDetails";
import SearchResults from "./pages/SearchResults";

// ================================= Components =================================
import AppLayout from "./layouts/AppLayout";

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
      { path: "*", element: <NotFound /> },
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
