import { combineReducers } from "redux";
import { contractReducer } from "./ContractReducer";
import { teamReducer } from "./TeamReducer";
import { meetingReducer } from "./MeetingReducer";

import { userInfoReducer } from "./UserInfoReducer";
import { adviseReducer } from "./AdviseReducer";

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  contract: contractReducer,
  team: teamReducer,
  meeting:meetingReducer,
  advise:adviseReducer
 
});
