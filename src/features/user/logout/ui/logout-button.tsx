import clsx from "clsx";

import { useAuth } from "@/shared/hooks";
import { Button } from "@/shared/ui";

interface LogoutButtonProps {
  className?: string;
}

export const LogoutButton = ({ className }: LogoutButtonProps) => {
  const { isAuth, isLoading, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (isLoading) return <p>Loading</p>;

  if (!isAuth) return null;

  return (
    <Button className={clsx("", className)} onClick={handleLogout}>
      Выйти
    </Button>
  );
};
