import { Navigate } from "react-router";

import { pagesConfig } from "@/shared/config";
import { useAuth } from "@/shared/context";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!isAuth) {
    return <Navigate to={pagesConfig.login} replace />;
  }

  return element;
};
