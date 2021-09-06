import React, { useState, useContext } from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import { UserInfoContext } from "../../contextInfo/ContextInfo";
import styles from "./verificationDetailes.module.css";
import whiteArrowImage from "../../../../asstes/whitearrow.svg"
import FreeServices from "../../basicInfo/detail/freeServices/FreeServices";

const VerificationDetailes = () => {
  const { setUpLoadedNationalCodeImage,setProgress,setStep } = useContext(UserInfoContext);

  const [nationalCodeImage, setNationalCodeImage] = useState("");

  const nationalCodeImageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setNationalCodeImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    setUpLoadedNationalCodeImage(e.target.files[0]);
  };

  const completedStepHandler=()=>{
setStep(step=>step+1)
setProgress(100)
  }
  return (
    <section className={styles.verification_detaile}>
      <UserStep stepName="احراز هویت" />
      <section className={styles.nationalcode_desc}>
        <div className={styles.description}>
          <p>
            برای استفاده از تمامی امکانات داشبورد آپلا، لطفا عکس روی کارت ملی
            خود را آپلود کنید.
          </p>
        </div>
        <div className={styles.nationalcode}>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image-upload"
            onChange={nationalCodeImageHandler}
          />
          {nationalCodeImage ? (
            <img className={styles.nationalCart} src={nationalCodeImage} alt="nationalCart" />
          ) : (
            <div className={styles.upload_info}>
              <label htmlFor="image" className={styles.upload_icon}>
                +
              </label>
              <label htmlFor="image" className={styles.upload_label}>
                محل اپلود عکس کارت ملی
              </label>
              <div className={styles.imageFormat_size}>
                <p className={styles.format}>فرمت JPG</p>
                <p className={styles.size}>حداکثر 2 mb</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className={styles.verification_lastStep}>
          <button onClick={completedStepHandler} className={styles.nextbtn}>
            آپلود و تکمیل ثبت نام
            <img src={whiteArrowImage} alt="arrow" />
          </button>
        </div>
        <FreeServices/>
    </section>
  );
};

export default VerificationDetailes;
