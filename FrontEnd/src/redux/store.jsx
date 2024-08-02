import { configureStore } from "@reduxjs/toolkit";
import usreSlice from "./userSlice";
const store = configureStore({
  reducer: {
    // actions
    user: usreSlice,
  },
});

export default store;
