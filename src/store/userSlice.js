import { createSlice } from "@reduxjs/toolkit";

const localStorageData = JSON.parse(localStorage.getItem("userData"));

const initialState = {
  displayName: localStorageData ? localStorageData.displayName : "",
  email: localStorageData ? localStorageData.email : "",
  userId: localStorageData ? localStorageData.userId : "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.displayName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setEmail, setName, setUserId } = userSlice.actions;

export default userSlice.reducer;
