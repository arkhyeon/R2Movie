import {usersReducer} from "./user";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {loginReducer} from "./login";
import {movieDetailReducer} from "./movieDetail";
import {libraryReducer} from "./library";

const rootReducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
  movieDetail: movieDetailReducer,
  library: libraryReducer,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
