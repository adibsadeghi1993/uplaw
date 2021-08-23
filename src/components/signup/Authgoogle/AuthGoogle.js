import React, { useEffect } from "react";
import "./AuthGoogle.css";
import queryString from "query-string";
import googleImage from "../../../asstes/google (2).svg";
import arrowImage from "../../../asstes/arrow2.svg";
import axios from "axios";

const AuthGoogle = (props) => {

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    console.log(query)
    console.log(query.code)
    const bodyCode={code:query.code}
    console.log(bodyCode)
     axios.post("http://localhost:3000/api/v1/customer/profile/auth/google",bodyCode).then((response)=>{
    console.log(response)
     }).catch((err)=>{
        console.log(err)
     })

  }, [props.location.search])

  const stringifiedParams = queryString.stringify({
    client_id:
      "857095448578-hb4jvirn25baa763ue2d9s13ri5o7vls.apps.googleusercontent.com",
    redirect_uri: "http://localhost:4000/auth/google",
    scope: ["profile", "email"].join(" "), // space seperated string
    response_type: "code",
    access_type: "offline",
  });

  return (
    <>
      <div className="authsection_google">
        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`}
        >
          <button>
            <img src={googleImage} alt="google" />
            <span>از گوگل برای ثبت نام/ ورود استفاده کنید</span>
          </button>
        </a>
      </div>
      <div className="condition">
        <input type="checkbox" id="checkboxCondition" />
        <label htmlFor="checkboxCondition">با قوانین و مقررات موافقم .</label>
      </div>
      <div className="confirm_signup">
        <button>
          <span>وارد شوید</span> <img src={arrowImage} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default AuthGoogle;
