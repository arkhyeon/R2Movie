import { usersReducer } from "./user";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./login";
import { modalReducer } from "./modal";
import { movieDetailReducer } from "./movieDetail";

const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
  modal: modalReducer,
  movieDetail: movieDetailReducer,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
