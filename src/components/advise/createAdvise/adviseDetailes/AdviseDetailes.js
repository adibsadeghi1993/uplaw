import React, { useState } from "react";
import styles from "./AdviseDetailes.module.css";
import FingerImage from "../../../common/fingerImgae/FingerImgae";
import Progress from "../../../common/contractHeader/ContractHeader";

const AdviseDetailes = () => {
  const [active, setActive] = useState("newAdvise");
  const prevAdviseHandler = () => {
    setActive("prevAdvise");
  };
  const newAdviseHandler = () => {
    setActive("newAdvise");
  };
  return (
    <div className={styles.main_advise}>
      <h3>/مشاوره</h3>
      <FingerImage>
        تو این صفحه میتونی تایم مشاوره رو با مشاورین آپلا ست بکنی و با خیال راحت
        دغدغه هات رو حل کنی
      </FingerImage>
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
      <Progress
        noneBox="noneBox"
        stepOne="انتخاب موضوع مشاوره"
        stepTow="انتخاب زمان شماوره"
        opacityThree="0.5"
        adjust={false}
      />
      <div className={styles.advise_type}>
        <p>تیم مورد نظر خود را برای انتخاب مشاوره انتخاب کنید</p>
        <p>مشاوره تخصصی میخواهم</p>
      </div>

      <section>
          
      </section>
    </div>
  );
};

export default AdviseDetailes;
