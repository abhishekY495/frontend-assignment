import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import emptyBookmarkIcon from "../assets/empty-bookmark.svg";
import filledBookmarkIcon from "../assets/filled-bookmark.svg";
import filledHeartIcon from "../assets/filled-heart.svg";
import {
  addComment,
  addPostToBookmark,
  likePost,
  removePostFromBookmark,
} from "../features/postSlice";
import toast from "react-hot-toast";

export const PostModal = ({ postId, openModal, closeModal }) => {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts);
  const post = postsData.find((post) => post.id === postId);
  const [comment, setComment] = useState("");
  const { fullName, userName } = useSelector(
    (state) => state.users.loggedInUser
  );

  const addCommentBtnHandler = (postId) => {
    if (comment.length === 0) {
      toast.error("Cannot be empty");
    } else {
      const newComment = {
        id: uuidv4(),
        fullName,
        userName,
        comment,
      };
      dispatch(addComment({ newComment, postId }));
      setComment("");
    }
  };

  const addToBookmark = () => {
    if (userName) {
      dispatch(addPostToBookmark(post?.id));
    } else {
      toast("Login to Bookmark");
    }
  };
  const removeFromBookmark = () => {
    if (userName) {
      dispatch(removePostFromBookmark(post?.id));
    } else {
      toast("Login to Bookmark");
    }
  };

  if (openModal) {
    return (
      <div
        onClick={closeModal}
        className="text-black fixed top-0 right-0 bg-neutral-800/80 backdrop-blur-[1.5px] w-screen h-screen z-[10]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col w-[410px] m-auto mt-20 bg-white rounded"
        >
          <div className="px-3 py-1">
            <p className="text-lg font-bold">{post?.postedBy}</p>
            <p className="text-sm text-neutral-400 leading-3 pb-1">
              @{post?.userName}
            </p>
          </div>
          <img
            src={post?.imageUrl}
            alt=""
            className="w-auto h-[380px] object-cover"
          />
          <div className="flex justify-between px-2 border-b border-black">
            <div className="flex items-center text-xl gap-[2px]">
              <img
                src={filledHeartIcon}
                className="w-5 hover:cursor-pointer"
                alt="heart"
                onClick={() => dispatch(likePost(post?.id))}
              />
              <p className="pb-1">{post?.likes}</p>
            </div>
            <img
              src={
                userName
                  ? post?.isBookmarked
                    ? filledBookmarkIcon
                    : emptyBookmarkIcon
                  : emptyBookmarkIcon
              }
              className="w-5 hover:cursor-pointer"
              alt="bookmark"
              onClick={post?.isBookmarked ? removeFromBookmark : addToBookmark}
            />
          </div>
          <p className="px-2 pb-1 font-bold text-xl border-b border-black">
            Comments
          </p>
          {userName && (
            <div className="flex flex-col mb-2">
              <textarea
                type="text"
                rows={3}
                className="border pl-2 border-neutral-400 w-full"
                placeholder="Your Comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
              <button
                className="bg-blue-300 border-blue-500 border hover:cursor-pointer hover:bg-blue-400 font-bold text-lg"
                onClick={() => addCommentBtnHandler(postId)}
              >
                Add
              </button>
            </div>
          )}
          <div className="px-2 h-[200px] overflow-y-scroll">
            {post?.comments.map(({ fullName, userName, comment, id }) => {
              return (
                <div key={id} className="mb-3 pb-3 border-b">
                  <div>
                    <p className="font-bold">{fullName}</p>
                    <p className="font-thin text-sm leading-3 text-neutral-400">
                      @{userName}
                    </p>
                  </div>
                  <p>{comment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};
