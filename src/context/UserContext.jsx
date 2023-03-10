import React, { useEffect, useState, createContext } from "react";
import { Register } from "../utils/auth";
import { auth } from "../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(email, password);
    e.target.reset();
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        console.log("user is not signed in");
      }
    });
  }, [handleSubmit]);
  const contextInfo = {
    setEmail,
    setPassword,
    authUser,
    handleSubmit,
  };
  return (
    <UserContext.Provider value={{ contextInfo }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
