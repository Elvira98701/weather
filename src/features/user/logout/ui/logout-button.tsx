import clsx from "clsx";

import { useAuth } from "@/shared/hooks";

import styles from "./styles.module.scss";

interface LogoutButtonProps {
  className?: string;
}

export const LogoutButton = ({ className }: LogoutButtonProps) => {
  const { isAuth, isLoading, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return <div className={clsx("", className)}>LogoutButton</div>;
};
