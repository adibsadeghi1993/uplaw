import React from "react";
import styles from "./PdfDoc.module.css";
import blueArrowImage from "../../../../asstes/blue arrow.svg"

const PdfDoc = ({checkboxTitle,downloadTitle}) => {
  return (
    <>
      <div className={styles.contractPdf}>hi</div>
      <div className={styles.important_point}>
        <p>نکته مهم</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <div className={`${styles.nextStep_download} ${downloadTitle==="دانلود صورت جلسه"?styles.column_direction_next_step:null}`}>
        <div className={styles.signture_contract}>
          <label htmlFor="sign">{checkboxTitle}</label>
          <input type="checkbox" id="sign" />
        </div>
        <button>
          <span>{downloadTitle}</span>
          <img src={blueArrowImage} alt="دریافت قرارداد" />
        </button>
      </div>
    </>
  );
};

export default PdfDoc;
