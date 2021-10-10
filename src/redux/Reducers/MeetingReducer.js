
import { CHOOSED_TEAM_FORM_MEETING, SET_MEETING_DATE, SET_MEETING_SUBJECT, SET_MEETING_TIME } from "../constants/MeetingConstants";

const initialState = {
  date: "",
  time: "",
  teamForMeeting: {},
  meetingSubject: {},
  myAdjustMeeting:[
    {id:1,adjustMeetingName:"صورت جلسه تغغیرات" ,adjustWith:"آپلا"},
    {id:2,adjustMeetingName:"صورت جلسه تغغیرات" ,adjustWith:"آپلا"},
    {id:3,adjustMeetingName:"صورت جلسه تغغیرات" ,adjustWith:"آپلا"},
  ]
};
export const meetingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MEETING_TIME: {
      return { ...state, time: payload };
    }

    case SET_MEETING_DATE: {
      return { ...state, date: payload };
    }
    case SET_MEETING_SUBJECT: {
      return { ...state, meetingSubject: payload };
    }

    case CHOOSED_TEAM_FORM_MEETING: {
      return { ...state, teamForMeeting: payload };
    }

    default:
      return state;
  }
};
