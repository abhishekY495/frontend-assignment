import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../features/userSlice";
import filledBookmarkIcon from "../assets/filled-bookmark.svg";
import { removePostFromBookmark } from "../features/postSlice";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { fullName } = useSelector((state) => state.users.loggedInUser);
  const posts = useSelector((state) => state.posts);
  const bookmarkedPosts = posts.filter((post) => post.isBookmarked);

  return (
    <div>
      <div className="bg-neutral-100 w-[400px] max-[400px]:w-full m-auto p-2 text-black rounded mt-10 flex flex-col gap-2 py-5">
        <p className="text-center text-2xl">
          Welcome, <span className="font-bold">{fullName}</span>
        </p>
        <button
          className="bg-red-300 text-xl rounded-md px-3 py-1 mx-auto border-2 border-red-500 hover:bg-red-400 transition-all font-bold"
          onClick={() => dispatch(logoutUser())}
        >
          Logout
        </button>
      </div>
      <p className="text-2xl text-center font-bold pt-5 underline">
        Bookmarked Posts
      </p>
      {bookmarkedPosts.length === 0 && (
        <p className="text-center mt-5 text-xl">Nothing to Show...</p>
      )}
      <div
        className={`w-[700px] max-[750px]:w-full grid m-auto justify-items-center mb-56 max-[735px]:grid-cols-1 ${
          bookmarkedPosts.length === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {bookmarkedPosts.map(({ id, imageUrl, userName, postedBy }) => (
          <div key={id} className="mt-4 w-[300px] bg-white text-black p-[1px]">
            <div className="flex justify-between">
              <div className="py-1 pl-2 pb-2">
                <p className="font-bold">{postedBy}</p>
                <p className="text-sm leading-3 text-neutral-400">
                  @{userName}
                </p>
              </div>
              <img
                src={filledBookmarkIcon}
                alt=""
                className="w-8 mr-1 hover:cursor-pointer"
                onClick={() => dispatch(removePostFromBookmark(id))}
              />
            </div>
            <img
              src={imageUrl}
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
