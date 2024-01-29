import { combineReducers } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navBarDataReducer from "./NavBarReducer";
import { configureStore } from "@reduxjs/toolkit";
import usersPageReducer from "./usersPageReducer";

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  navBarData: navBarDataReducer,
  usersPage: usersPageReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
