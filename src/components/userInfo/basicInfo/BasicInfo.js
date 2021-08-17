import React from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import DetailInfo from "./detail/DetailInfo";
import "./basicInfo.css";
import { useFormik } from "formik";

import { initialValues } from "./InitialValues";
import {validationSchema} from "./Validtaion"

const BasicInfo = () => {

    
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
  });
  return (
    <div className="basicInfo">
      <section className="userprofile">
        <UserProfile />
      </section>
      <section className="detailinfo">
        <DetailInfo />
      </section>
    </div>
  );
};

export default BasicInfo;
