import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Kuller",
    profileImg: "src/resource/img/t.png",
  },

  {
    id: 2,
    name: "seya",
    profileImg: "src/resource/img/c.png",
  },
  {
    id: 3,
    name: "KKH",
    profileImg: "src/resource/img/n.png",
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
