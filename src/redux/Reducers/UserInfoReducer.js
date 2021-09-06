import { CONFIRMED_AUTH_GOOGLE } from "../Constants";

const initialState = {
  userInfo: {
    success: false,
    data: {
        token: "",
        customer: {
            nationalNumber: "",
            nationalCardImage: "",
            fullName: "",
            mobileNumber: "",
            email: "",
            createdAt: "2021-08-17T13:32:59.671Z",
            updatedAt: "2021-09-02T14:06:04.948Z",
            skills: [],
            socialMedia: [
                {
                    "_id": "611bbc6c7b398b4bd6893ab8",
                    "where": "instagram",
                    "url": "instagram.com/hosseinDotLink"
                }
            ],
            isActive: true,
            verified: {
                "mobileNumber": false,
                "email": false,
                "nationalCardImage": false,
                "authentication": false
            },
            type: "",
            image: "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules.jpg",
            thumbnail: "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules-thumbnail.jpg"
        }
    },
    msg: null
}
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRMED_AUTH_GOOGLE:
               const updatedState={...state}
               updatedState.userInfo=action.payload
               return updatedState
  
    default:
      return state
  }
};
