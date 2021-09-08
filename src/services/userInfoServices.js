import axios from "axios";

export const signUpGoogle = (data) => {
  return axios.post(
    "http://193.176.240.81:3000/api/v1/customer/profile/auth/google",
    data
  );
};

export const signUpPhoneNumber = (data) => {
  return axios.post(
    "http://193.176.240.81:3000/api/v1/customer/profile/register",
    data
  );
};

export const signUpValidateCode = (data) => {
  return axios.post(
    "http://193.176.240.81:3000/api/v1/customer/profile/validate",
    data
  );
};

export const sendProfileImage = (data) => {
    const getToken=localStorage.getItem("userToken")
    const parsedToken=JSON.parse(getToken)
 return   axios.post('http://193.176.240.81:3000/api/v1/customer/profile/update/profile', data,
    {
       headers: {
                 "x-auth-token": `${parsedToken}`,
                 'content-type': 'multipart/form-data',
               }
     })
};

export const saveTokenInLocalStorage = (token) => {
  localStorage.setItem("userToken", JSON.stringify(token));
};

export const formatError = (errorReasponse) => {
  switch (errorReasponse.msg) {
    default:
      return "";
  }
};
