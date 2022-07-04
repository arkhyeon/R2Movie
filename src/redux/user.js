import { configureStore, createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "usersReducer",
  initialState: [],
  reducers: {
    userFetch: (state, action) => {
      state.push(...action.payload);
    },
  },
});

const usersStore = configureStore({ reducer: users.reducer });

export const { userFetch } = users.actions;

export default usersStore;
