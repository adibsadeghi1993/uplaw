import React from "react";
import "./Auth.css"
import { useFormik } from "formik";
import AuthPhone from "./AuthPhoneNumber/AuthPhone";
import AuthGoogle from "./Authgoogle/AuthGoogle";
import AbstractImage from "../../asstes/Abstract 4.jpg"

const Auth = (props) => {
  return (
    <section className="auth_section">
      <div className="sginup_description">
        <p className="sginup_description_first_p">به آینده وارد شوید .</p>
        <p className="sginup_description_second_p">
          با ثبت نام یا ورود به آپلا،از بین بیشتر از 150 سند،سند دلخواه خود را با 
          هوشمندی تمام <br/> تنظیم کرده، شرکت خود را تعریف کنی و مدیریت آن را اسانتر
          کنید
        </p>
      </div>
      <div className="google_phone_auth">
          <AuthPhone/>
          <div className="emptyspace">/</div>
          <AuthGoogle {...props}/>
      </div>
      {/* <img className="avatar" src={AbstractImage}/> */}
    </section>
  );
};

export default Auth;
