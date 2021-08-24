import React, { useState,useContext } from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import styles from "./detailInfo.module.css"
import Input from "./Input";
import uploadImage from "../../../../asstes/upload.svg";
import { allInputs } from "./ConstantInputs";
import DateImage from "../../../../asstes/Date.svg";
import whitearrowImage from "../../../../asstes/whitearrow.svg";

import DatePicker from "../DtaePicker/DatePicker";
import FreeServices from "./freeServices/FreeServices";
import { UserInfoContext } from "../../contextInfo/ContextInfo";

const DetailInfo = () => {
   const context = useContext(UserInfoContext)
   console.log(context)
  const {setUpLoadedImage,setStep,setProgress,setBirthday,formik}=context 
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
  const firstStepHandler=()=>{
    setStep(step=>step+1)
    setProgress(25)
  }
  return (
    <div className={styles.detail}>
      <UserStep />

      <section className={styles.Inputs}>
        {allInputs.map((item) => {
          return (
            <div className={styles[item.name]}>
              <Input
                type={item.type}
                name={item.name}
                formik={formik}
                placeholder={item.placeholder}
              />
            </div>
          );
        })}

        <div className={styles.confirmMobile}>
          <input type="text" placeholder="کد تایید" />
          <button>تایید موبایل</button>
        </div>
        <div className={styles.uploadImage}>
          <img src={userProfile} alt="profileImage" className={styles.profileImage} />
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image-upload"
            onChange={imageHandler}
          />
        </div>

        <div className={styles.birthday}>
          <DatePicker setBirthday={setBirthday} />
          <label htmlFor="datePicker">
            <img src={DateImage} alt="dateimage" />
          </label>
        </div>
        <div className={styles.label}>
          <label htmlFor="image">بارگذاری عکس</label>
        </div>
        <div className={styles.password}>
          <Input
            type="password"
            name="password"
            placeholder=" رمز عبور انتخابی خود را وارد کنید"
          />
          <p className={styles.passwordChracter}>8 کاراکتر</p>
        </div>

        <div className={styles.address}>
          <textarea
            type="text"
            name="address"
            {...formik.getFieldProps("address")}
            placeholder="  ادرس خود را وارد کنید"
          />
          {formik.errors.address && formik.touched.address && (
            <div className={styles.error}>{formik.errors.address}</div>
          )}
        </div>
      </section>
      <div className={styles.confirmInfo}>
        <p>ورود همه اطلاعات ضروری است</p>
        <button className="nextbtn" onClick={firstStepHandler}>
          ثبت و مرحله بعد
          <img src={whitearrowImage} alt="nextstepimage" />
        </button>
      </div>
      <FreeServices />
    </div>
  );
};

export default DetailInfo;
