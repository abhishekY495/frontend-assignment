import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/postSlice";
import usersReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
