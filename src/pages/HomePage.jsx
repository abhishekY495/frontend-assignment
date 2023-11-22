import React, { useState } from "react";

import { Post } from "../components/Post";
import { useSelector } from "react-redux";
import { PostModal } from "../components/PostModal";

export const HomePage = () => {
  const posts = useSelector((state) => state.posts);
  const [openModal, setOpenModal] = useState();
  const [postId, setPostId] = useState({});
  const closeModal = () => setOpenModal(false);

  return (
    <>
      <PostModal
        openModal={openModal}
        closeModal={closeModal}
        postId={postId}
      />
      <div className="grid grid-cols-3 w-[1200px] m-auto mb-56 gap-5 px-8 max-[1240px]:flex max-[1240px]:justify-center max-[1240px]:flex-wrap max-[1240px]:w-full">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              setOpenModal={setOpenModal}
              setPostId={setPostId}
            />
          );
        })}
      </div>
    </>
  );
};
