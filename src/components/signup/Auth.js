import React from "react";
import "./Auth.css"
import { useFormik } from "formik";

const Auth = () => {
  return (
    <section className="auth_section">
      <div>
        <p>به آینده وارد شوید</p>
        <p>
          با ثبت نام یا ورود به آپلا،از بین بیشتر از 150 سند،سند دلخواه خود را با
          هوشمندی تمام <br/>تنظیم کرده، شرکت خود را تعریف کنی و مدیریت آن را اسانتر
          کنید
        </p>
      </div>
    </section>
  );
};

export default Auth;
