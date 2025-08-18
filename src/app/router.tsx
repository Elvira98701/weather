import { createBrowserRouter } from "react-router";

import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { ProfilePage } from "@/pages/profile";
import { WeatherPage } from "@/pages/weather";

export const appRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/weather",
      element: <WeatherPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
  ]);
