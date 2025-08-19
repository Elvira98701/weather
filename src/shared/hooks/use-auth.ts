import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authFromStorage = localStorage.getItem("admin");
    let auth: boolean;

    if (authFromStorage === null) {
      auth = false;
    } else {
      auth = JSON.parse(authFromStorage);
    }

    setIsAuth(auth);
    setIsLoading(false);
  }, []);

  return { isAuth, isLoading };
};
