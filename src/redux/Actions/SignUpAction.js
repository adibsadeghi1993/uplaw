
import { formatError, saveTokenInLocalStorage, signUpGoogle, signUpValidateCode } from "../../services/userInfoServices";
import { CONFIRMED_AUTH_GOOGLE, CONFIRMED_AUTH_PHONENUMBER, FAILED_AUTH_GOOGLE, FAILED_AUTH_PHONENUMBER } from "../Constants";

export const signUpGooleAction = (data) => {
  
  return async(dispatch) => {
    try {
        const response=await signUpGoogle(data)
        console.log(response.data)
       
        dispatch(confrimSignUpGoogleAction(response.data))
        saveTokenInLocalStorage(response.data.data.token)
        
    } catch (error) {
        const errorMessage=formatError(error.response)
        dispatch(failedSignUpGoogleAction(errorMessage))
    }
  };
};


const confrimSignUpGoogleAction = (data) => {
  return {
    type: CONFIRMED_AUTH_GOOGLE,
    payload: data,
  };
};

const failedSignUpGoogleAction = (data) => {
    return {
      type: FAILED_AUTH_GOOGLE,
      payload: data,
    };
  };



export const signUpPhoneNumberAction = (data) => {
  
  return async(dispatch) => {
    try {
        const response=await signUpValidateCode(data)
        console.log(response.data)
       
        dispatch(confrimSignUpPhoneNumberAction(response.data))
        saveTokenInLocalStorage(response.data.data.token)
        
    } catch (error) {
        const errorMessage=formatError(error.response)
        dispatch(failedSignUpPhoneNumberAction(errorMessage))
    }
  };
};


  const confrimSignUpPhoneNumberAction = (data) => {
    return {
      type: CONFIRMED_AUTH_PHONENUMBER,
      payload: data,
    };
  };
  
  const failedSignUpPhoneNumberAction = (data) => {
      return {
        type: FAILED_AUTH_PHONENUMBER,
        payload: data,
      };
    };
