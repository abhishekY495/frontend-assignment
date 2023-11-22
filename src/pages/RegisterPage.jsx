import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <form className="flex flex-col gap-1 w-[500px] p-5 rounded bg-neutral-200 text-black m-auto max-[500px]:w-full">
      <label className="flex flex-col">
        <p className="text-2xl mb-1">Full Name</p>
        <input
          type="text"
          className="p-1 pl-2 rounded border border-neutral-400"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-2xl mb-1">UserName</p>
        <input
          type="text"
          className="p-1 pl-2 rounded border border-neutral-400"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-2xl mb-1">Password</p>
        <input
          type="password"
          className="p-1 pl-2 rounded border border-neutral-400"
        />
      </label>
      <button className="bg-neutral-800 rounded text-white p-1 mt-2 text-xl hover:cursor-pointer hover:bg-neutral-700">
        Register
      </button>
      <p className="mt-1">
        Have an Account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  );
};
