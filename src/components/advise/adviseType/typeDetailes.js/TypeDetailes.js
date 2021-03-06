import React, { useState } from "react";
import Progress from "../../../common/contractHeader/ContractHeader";
import FingerImage from "../../../common/fingerImgae/FingerImgae";
import styles from "./typeDetailes.module.css";
import lawAdviseImage from "../../../../asstes/lawpng.png";
import bussinessAdviseImage from "../../../../asstes/bussnesspng.png";
import arrowImage from "../../../../asstes/blue arrow.svg";
import { useHistory } from "react-router";

const TypeDetailes = () => {
  const [active, setActive] = useState("newAdvise");
  const [adviseType, setAdviseType] = useState("");

  const history = useHistory();

  const prevAdviseHandler = () => {
    setActive("prevAdvise");
  };
  const newAdviseHandler = () => {
    setActive("newAdvise");
  };

  const lawHandler = () => {
    setAdviseType("law");
  };

  const businessHandler = () => {
    setAdviseType("business");
  };

  const stepHandler=()=>{
    history.push("/setConsultantTime");
  };

  return (
    <main>
      <h3 className={styles.header}>/مشاوره</h3>
      <div className={styles.finger}>
        <FingerImage>
          تو این صفحه میتونی تایم مشاوره رو با مشارین آپلا ست بکنی و با خیال
          راحت دغدغه هات رو حل کنی.
        </FingerImage>
      </div>
      <div className={styles.advise_header}>
        <p
          onClick={newAdviseHandler}
          className={active === "newAdvise" ? styles.active : null}
        >
          ست کردن تایم مشاوره
        </p>
        <p
          onClick={prevAdviseHandler}
          className={active === "prevAdvise" ? styles.active : null}
        >
          مشاوره های قبلی
        </p>
      </div>
      <div className={styles.progress}>
        <Progress
          noneBox="noneBox"
          stepOne="انتخاب موضوع مشاوره"
          stepTow="انتخاب زمان شماوره"
          opacityThree="0.5"
          adjust={false}
        
        />
      </div>
      <div className={styles.advise_type}>
        <p>نوع مشاوره را انتخاب کنید.</p>
        <p>مشاوره تخصصی میخواهم</p>
      </div>
      <section className={styles.advise_container}>
        <article onClick={lawHandler}>
          <p>مشاوره حقوقی</p>
          <div className={styles.law_container}>
            <img src={lawAdviseImage} alt="مشاوره حقوقی" />
          </div>
        </article>
        <article onClick={businessHandler}>
          <p>مشاوره بیزنسی</p>
          <div className={styles.business_container}>
            <img src={bussinessAdviseImage} alt="مشاوره بیزنسی" />
          </div>
        </article>
      </section>
      <div className={styles.next_step_btn}>
        <button onClick={stepHandler}>
          <span>مرحله بعد</span>
          <img src={arrowImage} alt="مرحله بعد" />
        </button>
      </div>
    </main>
  );
};

export default TypeDetailes;
