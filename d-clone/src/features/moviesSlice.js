import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  new: [],
  trending: [],
  recommend: [],
  original: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.new = action.payload.new;
      state.trending = action.payload.trending;
      state.recommend = action.payload.recommend;
      state.original = action.payload.original;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
