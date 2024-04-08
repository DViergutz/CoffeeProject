import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { isLogged: false, token: "" },
  reducers: {
    authUser(state, action) {
      const { token } = action.payload;

      state.isLogged = !state.isLogged;
      state.token = token;
      return state;
    },
    logout(state, action) {
      return {};
    },
  },
});

const { reducer, actions } = userSlice;

export const { authUser, logout } = actions;

export default reducer;
