import { createContext, useState, useContext, useEffect } from "react";
import { soliRegistro, soliLogin, verifToken } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth() debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [errores, setErrors] = useState([]);

  const signUp = async (user) => {
    try {
      const resp = await soliRegistro(user);
      console.log(resp.data);
      setUser(resp.data);
      setisAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
      console.log(error);
    }
  };

  const signIn = async (user) => {
    try {
      const resp = await soliLogin(user);
      setUser(resp.data);
      setisAuthenticated(true);
    } catch (error) {
      // console.log(error);
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
    }
  };

  useEffect(() => {
    if (errores.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [errores]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      // console.log(cookies);
      if (cookies.token) {
        try {
          const resp = await verifToken(cookies.token);
          console.log(resp);
          if (!resp.data) setisAuthenticated(false);
          setisAuthenticated(true);
          setUser(resp.data);
        } catch (error) {
          console.log(error);
          setisAuthenticated(false);
          setUser(null);
        }
      }
    }
    checkLogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{ signUp, user, isAuthenticated, errores, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
