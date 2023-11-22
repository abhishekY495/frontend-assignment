import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { usersDB } from "../mockData/mockdata";

const userSlice = createSlice({
  name: "users",
  initialState: { usersDB, loggedInUser: {} },
  reducers: {
    registerUser: (state, action) => {
      const { fullName, userName, password } = action.payload;
      const newUser = {
        fullName,
        userName,
        password,
      };
      state.usersDB.push(newUser);
    },
    loginUser: (state, action) => {
      const { userName, password } = action.payload;
      let checkIfCorrectCredentials = false;
      state.usersDB.some((user) => {
        if (user.userName === userName && user.password === password) {
          checkIfCorrectCredentials = true;
          state.loggedInUser = user;
        }
      });
      if (checkIfCorrectCredentials) {
        toast.success("Logged In");
      } else {
        toast.error("Wrong UserName or Password");
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = {};
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
