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
        <div></div>
        <div>
          <article>
            <div>
              <img src={minesImage} alt="بستن سوال" />
            </div>
            <p>احراز هویت</p>
            <div>
              <div>
                <p>شماره موبایل خود را وراد کنید</p>
                <button>
                  <span>ارسال کد تایید</span>
                  <img src={blueArrowImage} alt="تایید" />
                </button>
              </div>
              <div>
                <p>کد تایید ارسال شده را وارد کنید</p>
                <button>
                  <span>ثبت کد تایید</span>
                  <img src={blueArrowImage} alt="تایید" />
                </button>
              </div>
            </div>
          </article>
          <article>
            <div>
              <img src={minesImage} alt="بستن سوال" />
            </div>
            <div>
              <div>
                <p>ترسیم امضا</p>
              </div>
              <div>
                <button>
                  <span>ثبت امضا</span>
                  <img src={blueArrowImage} alt="تایید" />
                </button>
              </div>
            </div>
          </article>
          <article>
            <div>
              <img src={minesImage} alt="بستن سوال" />
            </div>
            <div>
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
