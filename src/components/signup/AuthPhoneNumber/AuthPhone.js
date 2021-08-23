import React from "react";
import "./AuthPhone.css";
import circleArrowImage from "../../../asstes/circlearrow.svg";
import lockImage from "../../../asstes/lock.svg";
import phoneImage from "../../../asstes/phone.svg";

const AuthPhone = (props) => {
  const { formik } = props;
  return (
    <>
      <div className="authphone_phonenumber">
        <div className="authphone_phonenumber_error">
        <input
          type="text"
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
          placeholder="شماره تلفن خود را وارد کنید"
        />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <div className="error">{formik.errors.phoneNumber}</div>
        )} 
        </div>
        <button>
          <img src={circleArrowImage} alt="circle arrow" />
        </button>
        <img className="phoneImage" src={phoneImage} alt="phone" />
      </div>
      <div className="authphone_sendcode">
        <p>ارسال مجدد کد تا 05:00 دقیقه</p>
      </div>
      <div className="authphone_code">
        <div className="authphone_code_error">
        <input
          type="text"
          name="confirmCode"
          {...formik.getFieldProps("confirmCode")}
          placeholder="کد ارسال شده را وارد کنید"
        />
          {formik.errors.confirmCode && formik.touched.confirmCode && (
          <div className="error">{formik.errors.confirmCode}</div>
        )} 
        </div>
        <img src={lockImage} alt="lockImage" />
      </div>
    </>
  );
};

export default AuthPhone;
