import { createSlice } from "@reduxjs/toolkit";

import { postsDB } from "../mockData/mockdata";
import toast from "react-hot-toast";

const postSlice = createSlice({
  name: "posts",
  initialState: postsDB,
  reducers: {
    addNewPost: (state, action) => {
      const newPost = action.payload;
      state.unshift(newPost);
    },
    likePost: (state, action) => {
      const postId = action.payload;
      return state.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      );
    },
    addComment: (state, action) => {
      const { newComment, postId } = action.payload;
      return state.map((post) =>
        post.id === postId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post
      );
    },
    addPostToBookmark: (state, action) => {
      const postId = action.payload;
      toast.success("Added to Bookmarks");
      return state.map((post) =>
        post.id === postId ? { ...post, isBookmarked: true } : post
      );
    },
    removePostFromBookmark: (state, action) => {
      const postId = action.payload;
      toast.success("Removed from Bookmarks");
      return state.map((post) =>
        post.id === postId ? { ...post, isBookmarked: false } : post
      );
    },
  },
});

export const {
  addNewPost,
  likePost,
  addComment,
  addPostToBookmark,
  removePostFromBookmark,
} = postSlice.actions;
export default postSlice.reducer;
