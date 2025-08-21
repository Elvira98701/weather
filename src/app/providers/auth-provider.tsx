import { useEffect, useState, type PropsWithChildren } from "react";

import { AUTH_KEY } from "@/shared/constants";
import { AuthContext } from "@/shared/context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = () => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(true));
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuth(false);
  };

  useEffect(() => {
    const checkAuth = () => {
      try {
        const authFromStorage = localStorage.getItem(AUTH_KEY);
        const auth =
          authFromStorage !== null ? JSON.parse(authFromStorage) : false;
        setIsAuth(auth);
      } catch {
        setIsAuth(false);
      }
    };

    checkAuth();
    setIsLoading(false);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === AUTH_KEY) {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
