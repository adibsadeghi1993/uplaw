import React, { useState } from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import "./detailInfo.css";
import Input from "./Input";
import uploadImage from "../../../../asstes/upload.svg";
import { allInputs } from "./ConstantInputs";
import DateImage from "../../../../asstes/Date.svg"
import whitearrowImage from "../../../../asstes/whitearrow.svg"

import DatePicker from "../DtaePicker/DatePicker";

const DetailInfo = ({
  step,
  setStep,
  progress,
  setProgress,
  setUpLoadedImage,
  formik,
  setBirthday
}) => {
  const [userProfile, setUserProfile] = useState(uploadImage);
  console.log(formik.errors);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    setUpLoadedImage(e.target.files[0]);
  };
  return (
    <div className="detail">
      <UserStep
        step={step}
        setStep={setStep}
        setProgress={setProgress}
        progress={progress}
      />

      <section className="Inputs">
        {allInputs.map((item) => {
          return (
            <div className={item.name}>
              <Input
                type={item.type}
                name={item.name}
                formik={formik}
                placeholder={item.placeholder}
              />
            </div>
          );
        })}

        <div className="confirmMobile">
          <input type="text" placeholder="کد تایید" />
          <button>تایید موبایل</button>
        </div>
        <div className="uploadImage">
          <img src={userProfile} alt="profileImage" className="profileImage" />
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image-upload"
            onChange={imageHandler}
          />
        </div>

        <div className="birthday">

        <DatePicker setBirthday={setBirthday}/>
        <label htmlFor="datePicker">
        <img src={DateImage} alt="dateimage"/>
        </label>
        
        </div>
        <div className="label">
          <label htmlFor="image">بارگذاری عکس</label>
        </div>
        <div className="password">
          <Input
            type="password"
            name="password"
            formik={formik}
            placeholder=" رمز عبور انتخابی خود را وارد کنید"
          />
          <p className="passwordChracter">8 کاراکتر</p>
        </div>

        <div className="address">
          <textarea
            type="text"
            name="address"
            {...formik.getFieldProps("address")}
            placeholder="  ادرس خود را وارد کنید"
          />
           {formik.errors.address && formik.touched.address && (
          <div className="error">{formik.errors.address}</div>
        )}
        </div>
      </section>
      <div className="confirmInfo">
           <p>ورود همه اطلاعات ضروری است</p>
           <button className="nextstep">
             ثبت و مرحله بعد<img src={whitearrowImage} alt="nextstepimage"/>
           </button>
        </div>
    
    </div>
  );
};

export default DetailInfo;
