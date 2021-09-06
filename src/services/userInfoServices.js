import axios from "axios"


export const signUpGoogle=(data)=>{
    return axios.post("http://193.176.240.81:3000/api/v1/customer/profile/auth/google",data)
}

export const saveTokenInLocalStorage=(token)=>{
    localStorage.setItem("userToken",JSON.stringify(token))

}

export const formatError=(errorReasponse)=>{
    switch (errorReasponse.msg) {
       
    
        default:
            return "";
    }
}