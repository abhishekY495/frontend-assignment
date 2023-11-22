import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddPostModal } from "./AddPostModal";

export const NavBar = () => {
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  return (
    <>
      <nav className="w-[1200px] flex items-center justify-center max-[420px]:px-4 gap-5 bg-white text-black m-auto max-[1270px]:w-full px-10 py-5 my-5 rounded">
        <Link
          className="text-2xl rounded-lg border-2 border-black py-2 pb-3 px-4 hover:bg-neutral-200 transition-all"
          to="/"
        >
          Home
        </Link>
        {loggedInUser.userName && (
          <div
            className="border-2 border-black w-[100px] py-1 pb-2 rounded-md text-center text-2xl font-bold hover:cursor-pointer hover:bg-yellow-200 transition-all"
            onClick={() => setOpenModal(true)}
          >
            +
          </div>
        )}
        <Link
          className={`${
            loggedInUser?.userName
              ? "bg-blue-500 hover:bg-blue-400"
              : "bg-orange-500 hover:bg-orange-400"
          } text-2xl rounded-lg border-2 border-black py-2 pb-3 px-6 transition-all`}
          to="/profile"
        >
          Profile
        </Link>
      </nav>
      <AddPostModal openModal={openModal} closeModal={closeModal} />
    </>
  );
};
