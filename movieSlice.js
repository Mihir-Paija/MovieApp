import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    shortlisted: [],
  },
  reducers: {
    addMovie: (state, action) => {
      const existingMovie = state.shortlisted.find(
        (movie) => movie.id === action.payload.id
      );
      if (!existingMovie) {
        // Add the movie and set its shortlisted property to true
        state.shortlisted.push(action.payload);
      }
    },
    removeMovie: (state, action) => {
      state.shortlisted = state.shortlisted.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
