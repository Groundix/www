import { combineReducers, legacy_createStore } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navBarDataReducer from "./NavBarReducer";
import { configureStore } from "@reduxjs/toolkit";

let reducers  = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navBarData: navBarDataReducer   
});

let store = configureStore({
    reducers:reducers,
});



export default store;