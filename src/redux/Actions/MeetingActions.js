import { CHOOSED_TEAM_FORM_MEETING, SET_MEETING_DATE, SET_MEETING_SUBJECT, SET_MEETING_TIME } from "../constants/MeetingConstants"


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
export const setMeetingSubject=(data)=>{
    return{
     type:SET_MEETING_SUBJECT,
     payload:data
    }
}