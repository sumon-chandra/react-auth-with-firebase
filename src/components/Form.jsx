import React, { useEffect, useState } from "react";
import { Register } from "../utils/auth";
import { auth } from "../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Form = () => {
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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-orange-50 rounded p-10 mx-auto w-[350px] mt-8"
    >
      <p className="bg-white text-gray-600 font-bold text-lg p-2">
        {authUser.email}
      </p>
      <input
        className="border border-orange-400 bg-orange-100 text-red-500 rounded p-2"
        type="email"
        placeholder="Write your email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-orange-400 bg-orange-100 text-red-500 rounded p-2"
        type="password"
        placeholder="Write your password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="cursor-pointer border border-orange-100 bg-orange-400 text-white py-2 px-4 rounded-lg "
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default Form;
