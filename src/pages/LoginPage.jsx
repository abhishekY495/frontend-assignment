import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../features/userSlice";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

  const guestLoginBtnHandler = (e) => {
    e.preventDefault();
    setUserName("guest_user_01");
    setPassword("guest_user_01");
  };

  const loginBtnHandler = (e) => {
    e.preventDefault();
    if (userName.length === 0) {
      toast.error("UserName cannot be empty");
    } else if (password.length === 0) {
      toast.error("Password cannot be empty");
    } else {
      dispatch(loginUser({ userName, password }));
      if (loggedInUser) {
        navigate("/profile");
      }
    }
  };

  return (
    <form className="flex flex-col gap-1 w-[500px] p-5 rounded bg-neutral-200 text-black m-auto max-[500px]:w-full">
      <label className="flex flex-col">
        <p className="text-2xl mb-1">UserName</p>
        <input
          type="text"
          className="p-1 pl-2 rounded border border-neutral-400"
          onChange={(e) => setUserName(String(e.target.value))}
          value={userName}
        />
      </label>
      <label className="flex flex-col">
        <p className="text-2xl mb-1">Password</p>
        <input
          type="password"
          className="p-1 pl-2 rounded border border-neutral-400"
          onChange={(e) => setPassword(String(e.target.value))}
          value={password}
        />
      </label>
      <button
        type="submit"
        className="bg-neutral-800 rounded text-white p-1 mt-2 text-xl hover:cursor-pointer hover:bg-neutral-700"
        onClick={loginBtnHandler}
      >
        Login
      </button>
      <button
        type="submit"
        className="bg-green-800 rounded text-white p-1 mt-2 text-xl hover:cursor-pointer hover:bg-green-700"
        onClick={guestLoginBtnHandler}
      >
        Fill in Guest Credentials
      </button>
      <p className="mt-1">
        Dont Have an Account?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </form>
  );
};
