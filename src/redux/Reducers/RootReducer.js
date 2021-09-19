import { combineReducers } from "redux";
import { contractReducer } from "./ContractReducer";

import { userInfoReducer } from "./UserInfoReducer";



export const rootReducer=combineReducers({userInfo:userInfoReducer,contract:contractReducer})