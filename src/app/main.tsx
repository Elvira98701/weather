import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import { AuthProvider } from "./providers";
import { appRouter } from "./routes";

import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter()} />
    </AuthProvider>
  </StrictMode>
);
