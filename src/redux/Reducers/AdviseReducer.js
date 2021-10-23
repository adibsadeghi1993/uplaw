import { CHOOSED_TEAM_FOR_ADVISE } from "../constants/AdviseConstants";

const initialState={
    selectedAdviseTeam:{},
    times:[
      {id:1,time:"14:30 تا 15:00"},
      {id:2,time:"15:00 تا 15:30"},
      {id:3,time:"15:30 تا 16:00"},
      {id:4,time:"16:30 تا 17:00"},
      {id:5,time:"17:30 تا 18:00"},
      {id:6,time:"18:30 تا 19:00"},
      {id:7,time:"19:30 تا 20:00"},
      {id:8,time:"20:30 تا 21:00"},
      {id:9,time:"21:30 تا 22:00"},
    ]
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