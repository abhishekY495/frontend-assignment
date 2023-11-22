import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { loginUser, registerUser } from "../features/userSlice";
import toast from "react-hot-toast";

export const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerBtnHandler = () => {
    if (fullName.length === 0) {
      toast.error("FullName cannot be empty");
    } else if (userName.length === 0) {
      toast.error("UserName cannot be empty");
    } else if (password.length === 0) {
      toast.error("Password cannot be empty");
    } else {
      const ifUserNameExists = users.usersDB.some(
        (user) => user.userName === userName
      );
      if (ifUserNameExists) {
        toast.error("UserName already present");
      } else {
        const newUser = { fullName, userName, password };
        toast.success("Successfully Registed");
        dispatch(registerUser(newUser));
        dispatch(loginUser({ userName, password }));
        navigate("/profile");
      }
    }
  };

  return (
    <div className="flex flex-col gap-1 w-[500px] p-5 rounded bg-neutral-200 text-black m-auto max-[500px]:w-full">
      <label className="flex flex-col">
        <p className="text-2xl mb-1">Full Name</p>
        <input
          type="text"
          className="p-1 pl-2 rounded border border-neutral-400"
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label className="flex flex-col">
        <p className="text-2xl mb-1">UserName</p>
        <input
          type="text"
          className="p-1 pl-2 rounded border border-neutral-400"
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label className="flex flex-col">
        <p className="text-2xl mb-1">Password</p>
        <input
          type="password"
          className="p-1 pl-2 rounded border border-neutral-400"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        onClick={registerBtnHandler}
        className="bg-neutral-800 rounded text-white p-1 mt-2 text-xl hover:cursor-pointer hover:bg-neutral-700"
      >
        Register
      </button>
      <p className="mt-1">
        Have an Account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};
