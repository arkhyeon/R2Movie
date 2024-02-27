import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Kuller",
    profileImg: "assets/t.png",
  },

  {
    id: 2,
    name: "seya",
    profileImg: "assets/c.png",
  },
  {
    id: 3,
    name: "KKH",
    profileImg: "assets/n.png",
  },
];

const users = createSlice({
  name: "usersReducer",
  initialState,
  reducers: {
    userFetch: (state, action) => {
      state.push(...action.payload);
    },
  },
});
const usersState = (state) => state.users;

export const usersReducer = users.reducer;

export const { userFetch } = users.actions;

export const userSelector = createSelector(usersState, (state) => state);
