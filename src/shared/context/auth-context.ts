import { createContext } from "react";

export interface AuthContextProps {
  isAuth: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
