import React from "react";
import styles from "./freeservices.module.css"
import signatureImage from "../../../../../asstes/signature.svg";
import adjustImage from "../../../../../asstes/adjust.svg.svg";
import registermeeting from "../../../../../asstes/registermeeting.svg";

const FreeServices = () => {

  return (
    <section className={styles.freeservices}>
      <div className={styles.freeservices_info}>
       
          <p className={styles.freeFacility}>
            با تکمیل ثبت نام از امکانات روبرو <br />
            به صورت <span>رایگان</span> استفاده کنید.
          </p>
      
        <p className={styles.completedRegistration}>
          جلوتر از <span>544</span> نفر در تکمیل ثبت نام
        </p>
      </div>
      <div className={styles.freeservices_icons}>
        <div className={styles.adjustagreement}>
          <div className={styles.service}>
            <img src={adjustImage} alt="تنظیم سند" />
          </div>
          <p>
            تنظیم هوشمند <br />
            یک قرارداد
          </p>
        </div>
        <div className={styles.signature }>
          <div className={styles.service}>
            <img src={signatureImage} alt="امضا قرارداد" />
          </div>
          <p>
            ثبت امضای <br />
            دیجیتال
          </p>
        </div>
        <div className={styles.register}>
          <div className={styles.service}>
            <img src={registermeeting} alt="تنظیم جلسه"/>
          </div>
          <p>
            ثبت یک <br />
            صورت جلسه
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeServices;
