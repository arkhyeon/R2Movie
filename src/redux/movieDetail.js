import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  backdrop_path: "",
  genre_ids: [],
  original_title: "",
  overview: "",
  release_date: "",
  popularity: 0,
  vote_average: 0,
  vote_count: 0,
};

const movieDetail = createSlice({
  name: "movieDetailReducer",
  initialState: initialState,
  reducers: {
    setMovieDetail: (state, action) => {
      return action.payload;
    },
  },
});

const movieDetailState = (state) => state.movieDetail;

export const movieDetailReducer = movieDetail.reducer;

export const { setMovieDetail } = movieDetail.actions;

export const movieDetailSelector = createSelector(
  movieDetailState,
  (state) => state
);
