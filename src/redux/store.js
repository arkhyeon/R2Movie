import { usersReducer } from "./user";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./login";

const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
