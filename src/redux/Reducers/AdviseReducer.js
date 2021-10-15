import { CHOOSED_TEAM_FOR_ADVISE } from "../constants/AdviseConstants";

const initialState={
    selectedAdviseTeam:{}
}


export const adviseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHOOSED_TEAM_FOR_ADVISE:{
          return {...state,selectedAdviseTeam:payload}
        }
  
      default:
        return state;
    }
  };