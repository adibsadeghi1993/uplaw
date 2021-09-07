import axios from "axios";
import { formatError, saveTokenInLocalStorage, signUpGoogle } from "../../services/userInfoServices";
import { CONFIRMED_AUTH_GOOGLE, FAILED_AUTH_GOOGLE } from "../Constants";

export const signUpGooleAction = (data) => {
  
  return async(dispatch) => {
    try {
        const response=await signUpGoogle(data)
        console.log(response)
       
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
