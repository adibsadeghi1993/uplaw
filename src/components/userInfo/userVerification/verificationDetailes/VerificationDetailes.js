import React,{useState,useContext} from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import { UserInfoContext } from "../../contextInfo/ContextInfo";
import styles from "./verificationDetailes.module.css";

const VerificationDetailes = () => {
 const {setUpLoadedNationalCodeImage}=useContext(UserInfoContext)
    
const [nationalCodeImage, setNationalCodeImage] = useState("")

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
  return (
    <section className={styles.verification_detaile}>
      <UserStep />
      <section className={styles.nationalcode_desc}>
        <div className={styles.description}>
          <p>
            برای استفاده از تمامی امکانات داشبورد آپلا، لطفا عکس روی کارت ملی
            خود را آپلوئ کنید
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
          <div>
              <label htmlFor="image">+</label>
              <label htmlFor="image">محل اپلود عکس کارت ملی</label>
              <div><p>فرمت JPG</p><p>حداکثر 2 mb</p></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VerificationDetailes;
