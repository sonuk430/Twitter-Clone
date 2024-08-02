import { createSlice } from "@reduxjs/toolkit";

const usreSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
    profile: null,
  },
  reducers: {
    // multipal actions
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUsers = action.payload;
    },
    getMyProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { getOtherUser, getUser, getMyProfile } = usreSlice.actions;
export default usreSlice.reducer;
