import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice.jsx";
import userReducer from "./redux/UserSlice.jsx";
/* import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://abtomsvdwctapkbvozbb.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey); */

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
