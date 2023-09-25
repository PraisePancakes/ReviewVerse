import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuth = localStorage.getItem("loggedIn");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const response = await axios.get("http://localhost:3001/auth/user");
    console.log(response);
    return response.data.user;
  };

  useEffect(() => {
    if (isAuth) {
      getUser()
        .then((user) => setUser(user))
        .catch(() => {
          localStorage.removeItem("loggedIn");
          navigate("/");
        })
        .finally(() => setLoading(false));
    }
    setLoading(false);
  }, [isAuth]);

  const login = async (form) => {
    try {
      await axios.post("http://localhost:3001/auth/login", form);
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    loading,
    login,
    user,
    setUser,
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
