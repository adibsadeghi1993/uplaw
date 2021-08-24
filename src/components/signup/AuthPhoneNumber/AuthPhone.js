import React from "react";
import styles from "../Auth.module.css"
import circleArrowImage from "../../../asstes/circlearrow.svg";
import lockImage from "../../../asstes/lock.svg";
import phoneImage from "../../../asstes/phone.svg";
import axios from "axios"

const AuthPhone = (props) => {
  const { formik } = props;
  const phoneHandler=()=>{
   console.log(formik.values.phoneNumber)
  }

  return (
    <>
      <div className={styles.authphone_phonenumber}>
        <div className={styles.authphone_phonenumber_error}>
        <input
          type="text"
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
          placeholder="شماره تلفن خود را وارد کنید"
        />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <div className={styles.error}>{formik.errors.phoneNumber}</div>
        )} 
        </div>
        <button onClick={phoneHandler} className={!formik.errors.phoneNumber ? styles.sendphone : styles.notsendphone}>
          <img src={circleArrowImage} alt="circle arrow" />
        </button>
        <img className={styles.phoneImage} src={phoneImage} alt="phone" />
      </div>
      <div className={styles.authphone_sendcode}>
        <p>ارسال مجدد کد تا 05:00 دقیقه</p>
      </div>
      <div className={styles.authphone_code}>
        <div className={styles.authphone_code_error}>
        <input
          type="text"
          name="confirmCode"
          {...formik.getFieldProps("confirmCode")}
          placeholder="کد ارسال شده را وارد کنید"
        />
          {formik.errors.confirmCode && formik.touched.confirmCode && (
          <div className={styles.error}>{formik.errors.confirmCode}</div>
        )} 
        </div>
        <img src={lockImage} alt="lockImage" />
      </div>
    </>
  );
};

export default AuthPhone;
