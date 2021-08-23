import React, { useEffect } from "react";
import "./AuthGoogle.css";
import queryString from "query-string";
import { GoogleLogin } from "react-google-login";
import googleImage from "../../../asstes/google (2).svg";
import arrowImage from "../../../asstes/arrow2.svg";
import { Link } from "react-router-dom";

const AuthGoogle = () => {
  //   const responseSuccessGoogle = (response) => {
  //     console.log(response);
  //   };
  //   const responseErrorGoogle = (response) => {
  //     console.log(response);
  //   };
  useEffect(() => {
    console.log(
      queryString.parse(
        "?code=4%2F0AX4XfWiaowJljHJezlA5aOdYdLfAYBTzBPmYigp8GLHLU902OgRlOFE1k8ijJvUo_KVi9Q&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent#"
      )
    );
  }, []);

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
