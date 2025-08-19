import { createBrowserRouter } from "react-router";

import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { ProfilePage } from "@/pages/profile";
import { WeatherPage } from "@/pages/weather";
import { pagesConfig } from "@/shared/config";
import { Header } from "@/widgets/header";

import { Layout } from "./layouts";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <Layout headerSlot={<Header />} />,
      children: [
        {
          path: pagesConfig.home,
          element: <HomePage />,
        },
        {
          path: pagesConfig.login,
          element: <LoginPage />,
        },
        {
          path: pagesConfig.weather,
          element: <WeatherPage />,
        },
        {
          path: pagesConfig.profile,
          element: <ProfilePage />,
        },
      ],
    },
  ]);
