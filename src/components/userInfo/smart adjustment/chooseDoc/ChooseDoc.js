import React from "react";
import styles from "./chooseDoc.module.css";
import fingerImage from "../../../../asstes/finger.png"
import ChooseContract from "./chooseContract/ChooseContract";

const ChooseDoc = () => {
  return (
    <section>
      <h1>/تنظیم هوشمند</h1>
      <div className={styles.docs_info}>
        <p >
      
          تو این صفحه،میتونی از بین کلی سند حقوقی یا بیزنسی ، سندی که
          <br></br>
          میخوای رو انتخاب و بسازیش!
        </p>
      <div className={styles.fingerImage}> <img src={fingerImage} alt="انتخاب یک سند"/></div>
      </div>
      <p className={styles.doc_question}>دنبال چه سندی هستین ؟</p>
      <ChooseContract/>
    </section>
  );
};

export default ChooseDoc;
