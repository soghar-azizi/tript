
// =================================Library=================================
import {createBrowserRouter,RouterProvider}from "react-router-dom";
// =================================pages=================================
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import HelpCenter from "./components/pages/HelpCenter";
import Payment from "./components/pages/Payment";
import Profile from "./components/pages/Profile";
import PagesNotFound from "./components/pages/PagesNotFound";
import HotelDetails from "./components/pages/HotelDetails";
// =================================components=================================
import AppLayout from "./components/layout/AppLayout";
import SearchResults from "./components/pages/SearchResults";
// =================================createBrowserRouter=================================
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "helpCenter",
        element: <HelpCenter />,
      },
      {
        path: "hotelDetails",
        element: <HotelDetails />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "pagesNotFound",
        element: <PagesNotFound />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);

// =================================App=================================
export default function App(){
return <RouterProvider router={router}> </RouterProvider>
}