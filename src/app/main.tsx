import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import { AuthProvider, StoreProvider } from "./providers";
import { appRouter } from "./routes";

import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <StoreProvider>
        <RouterProvider router={appRouter()} />
      </StoreProvider>
    </AuthProvider>
  </StrictMode>
);
