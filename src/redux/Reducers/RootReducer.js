import { combineReducers } from "redux";
import { contractReducer } from "./ContractReducer";
import { teamReducer } from "./TeamReducer";
import { meetingReducer } from "./MeetingReducer";

import { userInfoReducer } from "./UserInfoReducer";

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  contract: contractReducer,
  team: teamReducer,
  meeting:meetingReducer
 
});
