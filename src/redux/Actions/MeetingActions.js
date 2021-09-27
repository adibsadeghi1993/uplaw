import { CHOOSED_TEAM_FORM_MEETING, SET_MEETING_DATE, SET_MEETING_TIME } from "../Constants"

export const choosedTeamForMeeting=(data)=>{
    return{
     type:CHOOSED_TEAM_FORM_MEETING,
     payload:data
    }
}
export const setMeetingDate=(data)=>{
    return{
     type:SET_MEETING_DATE,
     payload:data
    }
}
export const setMeetingTime=(data)=>{
    return{
     type:SET_MEETING_TIME,
     payload:data
    }
}