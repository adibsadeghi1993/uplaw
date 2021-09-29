import React, { useState, useEffect } from "react";
import styles from "./chooseDoc.module.css";
import fingerImage from "../../../../asstes/finger.png";
import ChooseContract from "./chooseContract/ChooseContract";

const ChooseDoc = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <section >
     <div className={styles.main_content}>
     <h1>/تنظیم هوشمند</h1>
      <div className={styles.docs_info}>
        {width > 768 ? (
          <p>
            تو این صفحه،میتونی از بین کلی سند حقوقی یا بیزنسی ، سندی که
            میخوای رو انتخاب و بسازیش!
          </p>
        ) : (
          <p>
            تو این صفحه،میتونی از بین کلی سند حقوقی یا بیزنسی ، سندی که میخوای
            رو انتخاب و بسازیش!
          </p>
        )}
        <div className={styles.fingerImage}>
          <img src={fingerImage} alt="انتخاب یک سند" />
        </div>
      </div>
      <p className={styles.doc_question}>دنبال چه سندی هستید ؟</p>
     </div>
      <ChooseContract />
    </section>
  );
};

export default ChooseDoc;
