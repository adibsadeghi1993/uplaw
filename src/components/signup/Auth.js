import React from "react";
import styles from "./Auth.module.css"
// import { useFormik } from "formik";
import AuthPhone from "./AuthPhoneNumber/AuthPhone";
import AuthGoogle from "./Authgoogle/AuthGoogle";
// import AbstractImage from "../../asstes/Abstract 4.jpg"

const Auth = (props) => {

 console.log(props.formik.errors)

 const {formik}=props

  return (
    <section className={styles.auth_section}>
      <div className={styles.sginup_description}>
        <p className={styles.sginup_description_first_p}>به آینده وارد شوید .</p>
        <p className={styles.sginup_description_second_p}>
          با ثبت نام یا ورود به آپلا،از بین بیشتر از 150 سند،سند دلخواه خود را با 
          هوشمندی تمام <br/> تنظیم کرده، شرکت خود را تعریف کنی و مدیریت آن را اسانتر
          کنید
        </p>
      </div>
      <div className={styles.google_phone_auth}>
          <AuthPhone formik={formik}/>
          <div className={styles.emptyspace}>/</div>
          <AuthGoogle formik={formik} {...props}/>
      </div>
      {/* <img className="avatar" src={AbstractImage}/> */}
    </section>
  );
};

export default Auth;
