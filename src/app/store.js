import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice"; // Assuming your slice is related to users, you might want to use a more appropriate name

const store = configureStore({
  reducer: {
    user: userReducer, // Use "user" instead of "counter" if it's related to user data
  },
});

export default store;
