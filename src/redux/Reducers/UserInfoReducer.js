import { CONFIRMED_AUTH_GOOGLE } from "../Constants";

const initialState = {
  userInfo: {
    successMsg: false,
    token: "",
    nationalNumber: "",
    nationalCardImage: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    skills: [],
    socialMedia: [],

    image:
      "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules.jpg",
    thumbnail:
      "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules-thumbnail.jpg",

    failedMsg: null,
  },
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRMED_AUTH_GOOGLE:
      const updatedState = { ...state };
      updatedState.userInfo = action.payload;
      return updatedState;

    default:
      return state;
  }
};
