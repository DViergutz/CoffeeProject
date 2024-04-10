import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { isLogged: false, token: "", userId: "" },
  reducers: {
    authUser(state, action) {
      console.log(action.payload);
      const { token, userId } = action.payload;

      state.isLogged = !state.isLogged;
      state.token = token;
      state.userId = userId;
    },

    logout(state, action) {
      return { isLogged: false, token: "", userId: "" }; // Reset to initial state
    },
  },
});

const { reducer, actions } = userSlice;

export const { authUser, logout } = actions;

export default reducer;
