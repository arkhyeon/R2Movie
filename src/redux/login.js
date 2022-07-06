import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "loginReducer",
  initialState: {},
  reducers: {
    connection: (state, action) => {
      return action.payload;
    },
    termination: (state) => {
      return {};
    },
  },
});
const loginState = (state) => state.login;

export const loginReducer = login.reducer;

export const { connection, termination } = login.actions;

export const loginSelector = createSelector(loginState, (state) => state);
