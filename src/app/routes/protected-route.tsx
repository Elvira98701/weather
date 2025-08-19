import { Navigate } from "react-router";

import { pagesConfig } from "@/shared/config";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const user = true;

  if (!user) {
    return <Navigate to={pagesConfig.login} replace />;
  }

  return element;
};
