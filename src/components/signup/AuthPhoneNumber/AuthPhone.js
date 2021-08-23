import React from "react";
import "./AuthPhone.css";
import circleArrowImage from "../../../asstes/circlearrow.svg";
import lockImage from "../../../asstes/lock.svg";
import phoneImage from "../../../asstes/phone.svg";

const AuthPhone = (props) => {
    const {formik}=props
  return (
    <>
      <div className="authphone_phonenumber">
        <input type="text" name="phoneNumber"  placeholder="شماره تلفن خود را وارد کنید" />
        <button>
          <img src={circleArrowImage} alt="circle arrow" />
        </button>
        <img className="phoneImage" src={phoneImage} alt="phone" />
      </div>
      <div className="authphone_sendcode">
        <p>ارسال مجدد کد تا 05:00 دقیقه</p>
      </div>
      <div className="authphone_code">
        <input type="text" name="confirmCode" placeholder="کد ارسال شده را وارد کنید" />
        <img src={lockImage} alt="lockImage" />
      </div>
    </>
  );
};

export default AuthPhone;
