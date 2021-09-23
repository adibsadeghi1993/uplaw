import React from "react";
import PdfDoc from "../../commonContractFiles/PdfDoc/PdfDoc";
import styles from "./CustomerSignture.module.css";
import blueArrowImage from "../../../../asstes/blue arrow.svg";
import addImage from "../../../../asstes/add.svg";
import minesImage from "../../../../asstes/mines.svg";

const CustomerSignture = () => {
  return (
    <main className={styles.customerSignture}>
      <section className={styles.customerSignture_right}>
        <PdfDoc />
        <div className={styles.customer_input_label}>
          <label htmlFor="customer">طرف مقابل قرارداد را امضا کند ؟</label>
          <input id="customer" type="checkbox" />
        </div>
      </section>
      <section className={styles.customerSignture_left}>
        <div className={styles.boredr}></div>
        <div>
          <article className={styles.confirm_mobile_code}>
            <div className={styles.first_image}>
              <img src={minesImage} alt="بستن سوال" />
            </div>
          <div className={styles.main_confirm}>
             <div className={styles.confirm_person_paragraf}> <p>احراز هویت</p></div>
            <div>
              <div className={styles.confirm_mobile}>
                <p>شماره موبایل خود را وراد کنید</p>
                <button>
                  <span>ارسال کد تایید</span>
                  <img src={blueArrowImage} alt="تایید" />
                </button>
              </div>
              <div className={styles.confirm_code}>
                <p>کد تایید ارسال شده را وارد کنید</p>
                <button>
                  <span>ثبت کد تایید</span>
                  <img src={blueArrowImage} alt="تایید" />
                </button>
              </div>
            </div>
          </div>
          </article>
          <article className={styles.draw_signture}>
            <div className={styles.second_image}>
              <img src={minesImage} alt="بستن سوال" />
            </div>
            <div className={styles.main_draw}>
              <div className={styles.signture_paragraf}>
                <p>ترسیم امضا</p>
              </div>
              <div >
                <input className={styles.emptySpace_signture}/>
               <div className={styles.confirm_signture}>
               <button>
                  <span>ثبت امضا</span>
                  <img src={blueArrowImage} alt="تایید" />
                </button>
               </div>
              </div>
            </div>
          </article>
          <article className={styles.request_signture}>
            <div className={styles.third_image}>
              <img src={minesImage} alt="بستن سوال" />
            </div>
            <div className={styles.main_request}>
              <div>
                <p>درخواست امضا از طرفین</p>
              </div>
              <div>
                  <p>ادیب صادقی</p>
                <button>
                  <span>+ افزودن</span>
                  
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CustomerSignture;
