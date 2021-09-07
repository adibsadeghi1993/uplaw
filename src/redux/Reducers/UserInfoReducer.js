import { CONFIRMED_AUTH_GOOGLE, FAILED_AUTH_GOOGLE } from "../Constants";

const initialState = {
  successMsg: "",
  userInfo: {
    token: "",
    nationalNumber: "",
    nationalCardImage: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    skills: [],
    socialMedia: [],
    userType:[],
    image:
      "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules.jpg",
    thumbnail:
      "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules-thumbnail.jpg",
  },
  failedMsg: "",
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRMED_AUTH_GOOGLE:
      const updatedState = { ...state ,successMsg:"ثبت نام با گوگل انجام شد"};
      updatedState.userInfo={...state.userInfo,token:action.payload.data.token,email:action.payload.data.customer.email}

      return updatedState;
      case FAILED_AUTH_GOOGLE:
        const newState={...state,failedMsg:"ثبت نام با گوگل با خطا انجام شد"}
      return newState

    default:
      return state;
  }
};
