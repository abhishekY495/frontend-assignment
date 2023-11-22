import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNewPost } from "../features/postSlice";
import toast from "react-hot-toast";

export const AddPostModal = ({ openModal, closeModal }) => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [postImage, setPostImage] = useState("");
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

  const selectedFile = (e) => {
    const file = e.target.files[0];
    setPostImage(URL.createObjectURL(file));
  };

  const addPost = () => {
    if (postImage.length === 0) {
      toast.error("Choose a File");
    } else {
      const newPost = {
        id: uuidv4(),
        imageUrl: postImage,
        postedBy: loggedInUser.fullName,
        userName: loggedInUser.userName,
        likes: 0,
        isBookmarked: false,
        comments: [],
      };
      dispatch(addNewPost(newPost));
      toast.success("Post Added");
      closeModal();
      setPostImage("");
    }
  };

  if (openModal) {
    return (
      <div
        className="text-black fixed top-0 right-0 bg-neutral-800/80 backdrop-blur-[1.5px] w-screen h-screen z-[10]"
        onClick={closeModal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col w-[410px] gap-2 m-auto mt-20 bg-white rounded p-5"
        >
          <p className="text-3xl font-bold border-b-black/20 border-b w-full">
            Add Post
          </p>
          <label
            htmlFor="file"
            className="hover:cursor-pointer bg-neutral-200 p-1 font-bold text-center hover:bg-neutral-300 transition-all border-black border rounded"
          >
            <input
              className="hidden"
              type="file"
              id="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={selectedFile}
            />
            Choose File
          </label>
          {postImage && (
            <img
              src={postImage}
              alt=""
              className="w-[400px] h-[350px] object-cover border"
            />
          )}
          <button
            className="bg-yellow-500 font-bold text-2xl py-1 rounded hover:bg-yellow-400 transition-all"
            onClick={addPost}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
};
