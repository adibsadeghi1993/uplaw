import { CHOOSED_TEAM_FORM_MEETING, SET_MEETING_DATE, SET_MEETING_TIME } from "../Constants"

const initialState={
    
        date:"",
        time:"",
        teamForMeeting:{}
    
}
export const meetingReducer=(state=initialState,{type,payload})=>{
    
    switch (type) {
        case SET_MEETING_TIME : {
            let oldState={...state}
            oldState.setMeeting={...oldState.setMeeting,time:payload}
            return {...oldState}
        }
      
        case SET_MEETING_DATE : {
            let oldState={...state}
            oldState.setMeeting={...oldState.setMeeting,date:payload}
            return {...oldState}
        }
       
        case CHOOSED_TEAM_FORM_MEETING :{
            let oldState={...state}
            oldState.setMeeting={...oldState.setMeeting,teamForMeeting:payload}
            return {...oldState}
        } 
           
    
        default:
            return state
    }
}