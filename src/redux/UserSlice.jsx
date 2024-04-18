import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { isLogged: false, token: "", userId: "", userName: "" },
  reducers: {
    authUser(state, action) {
      console.log(action.payload);
      const { token, userId, name } = action.payload;

      state.isLogged = !state.isLogged;
      state.token = token;
      state.userId = userId;
      state.userName = name;
    },

    logout(state, action) {
      return { isLogged: false, token: "", userId: "", userName: "" }; // Reset to initial state
    },
  },
});

const { reducer, actions } = userSlice;

export const { authUser, logout } = actions;

export default reducer;
