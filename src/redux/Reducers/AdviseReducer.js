import { CHOOSED_TEAM_FOR_ADVISE } from "../constants/AdviseConstants";

const initialState={
    setAdviseTeam:{}
}


export const adviseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHOOSED_TEAM_FOR_ADVISE:{
          return {...state,setAdviseTeam:payload}
        }
  
      default:
        return state;
    }
  };