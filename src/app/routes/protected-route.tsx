import { Navigate } from "react-router";

import { pagesConfig } from "@/shared/config";
import { useAuth } from "@/shared/hooks";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isAuth, isLoading } = useAuth();

  console.log(isAuth);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!isAuth) {
    return <Navigate to={pagesConfig.login} replace />;
  }

  return element;
};
