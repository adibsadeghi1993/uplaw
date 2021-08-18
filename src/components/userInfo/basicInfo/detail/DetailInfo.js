import React from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import "./detailInfo.css";

const DetailInfo = ({ step, setStep, progress, setProgress ,formik}) => {
  return (
    <div className="detail">
      <UserStep
        step={step}
        setStep={setStep}
        setProgress={setProgress}
        progress={progress}
      />

<section className="inputs">
     <div className="firstName">
        <Inputs type="text" name="firstName" formik={formik} placeholder="نام خود را وارد کنید"/>
      </div>
      <div className="lastName">
        <Inputs type="text" name="lastName" formik={formik} placeholder="نام خانوادگی خود را وارد کنید"/>
      </div>
      <div className="phoneNumber">
        <Inputs type="text" name="phoneNumber" formik={formik} placeholder=" شماره موبایل خود را وارد کنید"/>
      </div>
      <div className="confirmMobile">
        <input type="text" placeholder="کد تایید"/>
        <button>تایید موبایل</button>
      </div>
        <div className="uploadImage">
          <img src={userProfile} alt="profileImage"  className="profileImage" />
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image-upload"
            onChange={imageHandler}
          />
        </div>
        <div className="email">
        <Inputs type="text" name="email" formik={formik} placeholder="ایمیل خود را وارد کنید"/>
      </div>
      <div className="birthday">
        <Inputs type="text" name="birthday" formik={formik} placeholder="تاریخ تولد خود را وارد کنید"/>
      </div>
      <div className="label">
        <label htmlFor="image">بارگذاری عکس</label>
      </div>
      <div className="password">
        <Inputs type="password" name="password" formik={formik} placeholder=" رمز عبور انتخابی خود را وارد کنید"/>
      </div>
      <div className="confirmPassword">
        <Inputs type="password" name="confirmPassword" formik={formik} placeholder="رمز عبور انتخابی خود را مجددا وارد کنید"/>
      </div>
      <div className="address">
        <textarea type="text" name="address"  {...formik.getFieldProps("address")} placeholder="  ادرس خود را وارد کنید"/>
      </div>
      <div className="nationalCode">
        <Inputs type="text" name="nationalCode" formik={formik} placeholder="کد ملی خود را وارد کنید"/>
      </div>
      <div className="postalcode">
        <Inputs type="text" name="postalCode" formik={formik} placeholder="کد پستی خود را وارد کنید"/>
      </div>
     </section>

    </div>
  );
};

export default DetailInfo;
