import React from "react";
import "./AuthGoogle.css";
import { GoogleLogin } from 'react-google-login'
import googleImage from "../../../asstes/google (2).svg";
import arrowImage from "../../../asstes/arrow2.svg";

const AuthGoogle = () => {

    const responseSuccessGoogle=(response)=>{
        console.log(response)
    }
    const responseErrorGoogle=(response)=>{
        console.log(response)
    }
  return (
    <>
      <div className="authsection_google">
        <GoogleLogin
          clientId="857095448578-hb4jvirn25baa763ue2d9s13ri5o7vls.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img src={googleImage} alt="google image" />
              <span>از گوگل برای ثبت نام/ ورود استفاده کنید</span>
            </button>
          )}
          buttonText="Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div className="condition">
        <input type="checkbox" id="checkboxCondition" />
        <label htmlFor="checkboxCondition">با قوانین و مقررات موافقم .</label>
      </div>
      <div className="confirm_signup">
        <button>
          <span>وارد شوید</span> <img src={arrowImage} alt="arrow image" />
        </button>
      </div>
    </>
  );
};

export default AuthGoogle;
