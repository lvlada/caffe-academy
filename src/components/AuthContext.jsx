import { createContext, useState, useContext } from "react";
import data from "../data/coffe-list.json";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  function handleLogin(loginState, logedUser) {
    setIsLogin(loginState);
    setUser(logedUser);
  }

  const value = {
    data,
    user,
    isLogin,
    handleLogin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
