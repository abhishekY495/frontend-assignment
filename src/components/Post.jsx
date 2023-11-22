import React, { useState } from "react";

import likeIcon from "../assets/like.svg";
import commentIcon from "../assets/comment.svg";

export const Post = ({ post, setOpenModal, setPostId }) => {
  const { id, imageUrl, likes, comments } = post;
  const [showOnHover, setShowOnHover] = useState(false);

  const postClickHandler = () => {
    setOpenModal(true);
    setPostId(id);
  };

  return (
    <div
      key={id}
      className="relative"
      onMouseEnter={() => setShowOnHover(true)}
      onMouseLeave={() => setShowOnHover(false)}
      onClick={postClickHandler}
    >
      <img
        src={imageUrl}
        alt="random image from unsplash"
        className="w-[400px] h-[350px] object-cover hover:opacity-60 hover:cursor-pointer transition-all"
      />
      {showOnHover && (
        <div className="flex absolute top-[150px] left-[120px] gap-5">
          <div className="flex gap-1 items-center">
            <img src={likeIcon} alt="heart" className="w-8" />
            <p className="font-bold text-xl">{likes}</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src={commentIcon} alt="comment" className="w-8" />
            <p className="font-bold text-xl">{comments?.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};
