import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import { appRouter } from "./routes";

import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter()} />
  </StrictMode>
);
