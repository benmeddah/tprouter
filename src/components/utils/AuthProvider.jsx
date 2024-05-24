import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("login")
  );
  const login = (username, password) => {
    if (username == "admin" && password == "admin") {
      window.localStorage.setItem("login", true);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    window.localStorage.removeItem("login");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
