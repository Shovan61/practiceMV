import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  new: [],
  trending: [],
  recomended: [],
  original: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.new = action.payload.neW;
      state.trending = action.payload.trending;
      state.recomended = action.payload.recomended;
      state.original = action.payload.original;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
