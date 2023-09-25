import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Services/Auth/AuthServices";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuth = localStorage.getItem("loggedIn");
  const navigate = useNavigate();
  const [initalGlobalLoading, setInitialGlobalLoading] = useState(true);

  useEffect(() => {
    if (isAuth) {
      getUser()
        .then((user) => setUser(user))
        .catch(() => {
          localStorage.removeItem("loggedIn");
          navigate("/");
        })
        .finally(() => setInitialGlobalLoading(false));
    }
    setInitialGlobalLoading(false);
  }, [isAuth, navigate]);

  const value = {
    initalGlobalLoading,
    user,
    setUser,
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
