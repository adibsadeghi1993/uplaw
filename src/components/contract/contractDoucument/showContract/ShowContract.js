import React from "react";
import styles from "./showContract.module.css";
import saveTimeImage from "../../../../asstes/saveTime.svg";
import riskImage from "../../../../asstes/risk.svg";
import walletImage from "../../../../asstes/wallet.svg";
import contractPdf from "../../../../asstes/pdfcontract.png";
import blueArrowImage from "../../../../asstes/blue arrow.svg";

const ShowContract = ({ choosedContract,suggestedContracts,checkboxTitle="قرارداد امضا شود ؟",download="دریافت قرارداد" }) => {

  const checkHander=()=>{
    
  }
  return (
    <main className={styles.main_showContract}>
      <section className={styles.showContract_sectionRight}>
        <p className={styles.adjust_contract}>
          با تنظیم هوشمند {choosedContract}:
        </p>
        <div className={styles.contract_benifit}>
          <div className={styles.saveTime}>
            <div className={styles.image_container}>
              <img src={saveTimeImage} alt="صرفه جویی در زمان" />
            </div>
            <p>3 ساعت در زمان شما صرفه جویی شد.</p>
          </div>
          <div className={styles.risk}>
            <div className={styles.image_container}>
              <img src={riskImage} alt="ریسک کم شد" />
            </div>
            <p>سه ریسک حقوقی برطرف شد.</p>
          </div>

          <div className={styles.wallet}>
            <div className={styles.image_container}>
              <img src={walletImage} alt="صرفه جویی در زمان" />
            </div>
            <p>300 هزار تومان ذخیره شد.</p>
          </div>
        </div>
        <div className={`${styles.suggest_contract} ${styles[suggestedContracts]}`}>
          <p>قرارداد های پیشنهادی :</p>
          <div className={styles.contrac_btns}>
            <button>قرارداد استخدام برنامه نویس موبایل</button>
            <button>قرارداد استخدام مدیر محصول</button>
          </div>
        </div>
      </section>
      <section className={styles.showContract_sectionLeft}>
        <div className={styles.contractPdf}></div>
        <div className={styles.important_point}>
          <p>نکته مهم</p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div className={`${styles.nextStep_download} ${download ? styles.download_proceeding:null}`}>
         <div className={styles.signture_contract}>
         <label htmlFor="sign">{checkboxTitle}</label>
          <input onChange={checkHander} type="checkbox" id="sign" />
         </div>
          <button>
            <span>{download}</span>
            <img src={blueArrowImage} alt="دریافت قرارداد" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ShowContract;
