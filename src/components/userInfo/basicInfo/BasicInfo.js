import React, { useState } from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import DetailInfo from "./detail/DetailInfo";
import "./basicInfo.css";
import { useFormik } from "formik";

import { initialValues } from "./InitialValues";
import { validationSchema } from "./Validtaion";

const BasicInfo = ({ setProgress, progress, setStep, step }) => {
  const [upLoadedImage, setUpLoadedImage] = useState(null);
  const [bithday, setBirthday] = useState("");

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
  });
  return (
    <div className="basicInfo">
      <section className="profilesection">
        <UserProfile progress={progress} />
      </section>
      <section className="detailinfo">
        <DetailInfo
          formik={formik}
          step={step}
          progress={progress}
          setStep={setStep}
          setProgress={setProgress}
          setUpLoadedImage={setUpLoadedImage}
          setBirthday={setBirthday}
        />
      </section>
    </div>
  );
};

export default BasicInfo;
