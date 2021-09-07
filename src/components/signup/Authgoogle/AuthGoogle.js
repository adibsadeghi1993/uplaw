import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Auth.module.css";
import queryString from "query-string";
import googleImage from "../../../asstes/google (2).svg";
import arrowImage from "../../../asstes/arrow2.svg";
import stylesGoogle from "./AuthGoogle.module.css";
import { signUpGooleAction, signUpPhoneNumberAction } from "../../../redux/Actions/SignUpAction";
import { useHistory } from "react-router-dom";


const AuthGoogle = (props) => {

  const dispatch = useDispatch()
  const history=useHistory()
 const state= useSelector(state=>state.userInfo.userInfo)

//  if (state.data.customer.verified.email ) {
//    history.push("/dashbord")
//  } 
  const { formik } = props;

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    const bodyCode = { code: query.code };
    console.log(bodyCode);
   dispatch(signUpGooleAction(bodyCode))
  }, [props.location.search]);

  const stringifiedParams = queryString.stringify({
    client_id:
      "857095448578-hb4jvirn25baa763ue2d9s13ri5o7vls.apps.googleusercontent.com",
    redirect_uri: "http://localhost:4000/auth/google",
    scope: ["profile", "email"].join(" "), // space seperated string
    response_type: "code",
    access_type: "offline",
  });

  let SignUpConfirmButton = false;

  if (
    !formik.errors.terms &&
    !formik.errors.confirmCode &&
    !formik.errors.phoneNumber
  ) {
    SignUpConfirmButton = true;
  }

  const authPhoneNumberHandler= async()=>{
    const {phoneNumber,confirmCode}=formik.values
    const bodyRequest={mobileNumber:phoneNumber,code:confirmCode}
    console.log(bodyRequest)
    if (SignUpConfirmButton) {
      dispatch(signUpPhoneNumberAction(bodyRequest))
      
    }
  }

  return (
    <>
      <div className={styles.authsection_google}>
        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`}
        >
          <button>
            <img src={googleImage} alt="google" />
            <span>از گوگل برای ثبت نام/ ورود استفاده کنید</span>
          </button>
        </a>
      </div>
      <div className={styles.condition}>
        <input
          type="checkbox"
          id="terms"
          value={true}
          name="terms"
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
        <label htmlFor="terms">با قوانین و مقررات موافقم .</label>
        {formik.errors.terms && formik.touched.terms && (
          <div className={styles.error}>{formik.errors.terms}</div>
        )}
      </div>
      <div className={styles.confirm_signup}>
        <button
          className={`${
            SignUpConfirmButton
              ? stylesGoogle.successSignUp
              : stylesGoogle.failedSignUp
          }`}
          onClick={authPhoneNumberHandler}
        >
          <span>وارد شوید</span> <img src={arrowImage} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default AuthGoogle;
