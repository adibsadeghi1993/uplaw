import React,{useState} from "react";
import styles from "./variousDocs.module.css";
import blueArrow from "../../../../../asstes/blue arrow.svg"

const VariousDocs = () => {
    const [statusDoc, setstatusDocs] = useState(true)

  const docs = [
    { docName: "تفاهمنامه سهامداران", id: 1 },
    { docName: "قرارداد استخدام برنامه نویس", id: 2 },
    { docName: "اساسنامه شرکت <span>آپلا</span>", id: 3 },
  ];
  const businessHandler=()=>{
      setstatusDocs(false)
  }
  const legalHandler=()=>{
    setstatusDocs(true)
}
  return (
    <>
      <div className={styles.doc}>
        <p onClick={legalHandler}  className={`${styles.legal_docs} ${statusDoc ? styles.active :""}` }>اسناد حقوقی</p> <p onClick={businessHandler} className={`${styles.business_docs} ${!statusDoc ? styles.active :""}`}>اسناد کسب و کاری</p>
      </div>
      <div className={styles.alldocs}>
        {docs.map((item) => {
          return (
            <div className={`${styles.eachDoc} ${styles[`doc${item.id}`]}`}>
                <p dangerouslySetInnerHTML={{
                    __html: item.docName
                }}>
                </p>
              <button className={styles.docbtn}><p className={styles.observe}>مشاهده</p> <img src={blueArrow}/></button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VariousDocs;
