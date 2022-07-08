import { createSelector, createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modalReducer",
  initialState: "none",
  reducers: {
    setDisplay: (state, action) => {
      return action.payload;
    },
  },
});

const modalState = (state) => state.modal;

export const modalReducer = modal.reducer;

export const { setDisplay } = modal.actions;

export const modalSelector = createSelector(modalState, (state) => state);
