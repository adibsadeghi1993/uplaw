import React from "react";
import styles from "./Auth.module.css"
import AuthPhone from "./AuthPhoneNumber/AuthPhone";
import AuthGoogle from "./Authgoogle/AuthGoogle";
import AbstractImage from "../../asstes/Abstract 4.jpg"

const Auth = (props) => {

 console.log(props.formik.errors)

 const {formik}=props

  return (
    <section className={styles.auth_section}>
      <div className={styles.sginup_description}>
        <p className={styles.sginup_description_first_p}>به آینده وارد شوید .</p>
        <div className={styles.sginup_description_second_p}>
          <p>با ثبت نام و یا ورود به آپلا، از بین بیشتر از 150 سند ، سند دلخواه خود را با هوشمندی تمام</p>
          <p>تنظیم کرده، شرکت خود را تعریف کنی و مدیریت آن را آسانتر کنید.</p>
        </div>
      </div>
      <div className={styles.google_phone_auth}>
          <AuthPhone formik={formik}/>
          <div className={styles.emptyspace}>/</div>
          <AuthGoogle formik={formik} {...props}/>
          <div className={styles.forgotPassword}>
        <p>رمز عبور خود را فراموش کردید؟</p>
      </div>
      </div>
      <img className={styles.avatar} src={AbstractImage} alt="abstract"/>
    
      
    </section>
  );
};

export default Auth;
