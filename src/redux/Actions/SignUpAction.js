import axios from "axios";
import { CONFIRMED_AUTH_GOOGLE, FAILED_AUTH_GOOGLE } from "../Constants";

export const signUpGooleAction = (data) => {
  console.log("adibbbbbbbb");
  return (dispatch) => {
    axios
      .post(
        "http://193.176.240.81:3000/api/v1/customer/profile/auth/google",
        data
      )
      .then((response) => {
          console.log(response.data)
        dispatch(confrimSignUpGoogleAction(response.data))
      })
      .catch((err) => {
        console.log(err.response.msg);
        dispatch(failedSignUpGoogleAction(err.response.data.msg))
      });
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
