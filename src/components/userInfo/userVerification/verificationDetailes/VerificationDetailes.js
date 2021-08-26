import React from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import styles from "./verificationDetailes.module.css";

const VerificationDetailes = () => {
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
            // onChange={imageHandler}
          />
        </div>
      </section>
    </section>
  );
};

export default VerificationDetailes;
