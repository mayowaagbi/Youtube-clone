// usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: null,
  loading: false,
};

// Create a slice
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export action creators
export const { setUser, setLoading } = usersSlice.actions;

// Export the reducer
export default usersSlice.reducer;
