import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Form = () => {
  const { contextInfo } = useContext(UserContext);
  const user = contextInfo.authUser;
  return (
    <form
      onSubmit={contextInfo.handleSubmit}
      className="flex flex-col gap-6 bg-orange-50 rounded p-10 mx-auto w-[350px] mt-8"
    >
      <p className="bg-white text-gray-600 font-bold text-lg p-2">
        {user.email}
      </p>
      <input
        className="border border-orange-400 bg-orange-100 text-red-500 rounded p-2"
        type="email"
        placeholder="Write your email..."
        onChange={(e) => contextInfo.setEmail(e.target.value)}
      />
      <input
        className="border border-orange-400 bg-orange-100 text-red-500 rounded p-2"
        type="password"
        placeholder="Write your password..."
        onChange={(e) => contextInfo.setPassword(e.target.value)}
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
