import { useState } from "react";
import { login } from "./requests";

import { AuthenticationContext } from "./context";

export default function AuthenticationProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const isLoggedIn = Boolean(token);

  const sendOtpCode = async (email) => {
    try {
      const response = await login(email);
      const { otpCode } = response.data;
      console.log("confirm code:", otpCode);
    } catch (error) {
      console.error("error:", error);
    }
  };


  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthenticationContext.Provider
      value={{ sendOtpCode, handleLogout, isLoggedIn }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
