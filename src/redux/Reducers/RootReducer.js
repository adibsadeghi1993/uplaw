import { combineReducers } from "redux";

import { userInfoReducer } from "./UserInfoReducer";



export const rootReducer=combineReducers({userInfo:userInfoReducer})