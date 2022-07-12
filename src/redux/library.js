import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = [];

const library = createSlice({
  name: "libraryReducer",
  initialState,
  reducers: {
    addLibrary: (state, action) => {
      state.push(action.payload);
    },
    removeLibrary: (state, action) =>
      state.filter((lib) => {
        return lib.id !== action.payload;
      }),
  },
});

const libraryState = (state) => state.library;

export const libraryReducer = library.reducer;

export const { addLibrary, removeLibrary } = library.actions;

export const librarySelector = createSelector(libraryState, (state) => state);
