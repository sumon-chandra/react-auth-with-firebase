import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
  const { contextInfo } = useContext(UserContext);
  return (
    <h1 className="bg-slate-200 text-gray-600 text-4xl text-center py-8">
      React Firebase Authentication System
      <p className="bg-white text-gray-600 font-bold text-lg p-2">
        display name
      </p>
    </h1>
  );
};

export default Header;
