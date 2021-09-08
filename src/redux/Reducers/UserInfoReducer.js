import { CONFIRMED_AUTH_GOOGLE, CONFIRMED_AUTH_PHONENUMBER, FAILED_AUTH_GOOGLE, FAILED_AUTH_PHONENUMBER } from "../Constants";

const initialState = {
  successMsg: "",
  userInfo: {
    token: "",
    nationalNumber: "",
    nationalCardImage: "",
    fullName: "",
    mobileNumber: "",
    userEmail: "",
    skills: [],
    socialMedia: [],
    userType:[],
    image:"",  
    thumbnail:"" 
  },
  failedMsg: "",
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRMED_AUTH_GOOGLE:
      const updatedState = { ...state ,successMsg:"ثبت نام با گوگل انجام شد"};
      updatedState.userInfo={...state.userInfo,token:action.payload.data.token,userEmail:action.payload.data.customer.email}
      return updatedState;
      
      case FAILED_AUTH_GOOGLE:
        const failedGoogleAuthState={...state,failedMsg:"ثبت نام با گوگل با خطا روبرو شد"}
      return failedGoogleAuthState

      case CONFIRMED_AUTH_PHONENUMBER:
        const newStateAuthPhonNumber = { ...state ,successMsg:"ثبت نام با شماره تلفن انجام شد",failedMsg:""};
        newStateAuthPhonNumber.userInfo={...state.userInfo,token:action.payload.data.token,mobileNumber:action.payload.data.customer.mobileNumber}
        return newStateAuthPhonNumber

        case FAILED_AUTH_PHONENUMBER:
          const failedStatePhoneNumber={...state,failedMsg:"ثبت نام با شماره تلفن با خطا روبرو شد",successMsg:""}
        return failedStatePhoneNumber
  
    default:
      return state;
  }
};
