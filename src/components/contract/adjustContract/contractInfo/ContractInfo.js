import React, { useState,useEffect } from "react";
import styles from "./contractInfo.module.css";
import blueArrowImage from "../../../../asstes/blue arrow.svg"
import confirmImage from "../../../../asstes/confirm.svg";
import { useSelector } from "react-redux";
import { selectedBands } from "./SelectedBands";
import { SortedContract } from "./SortedContract";

const ContractInfo = () => {
    const [openQ, setOpenQ] = useState(false)
    const state = useSelector((state) => state.contract.contract);
    const { made } = state;
   
    const [sortedBands, setSortedBands] = useState([])

useEffect(() => {
  const sortedData=SortedContract(made[0].bands)
  console.log(sortedData)
  setSortedBands(sortedData)
   
}, [made])
 
 
  const modalHandler=()=>{
      setOpenQ(!openQ)
  }
  console.log(made);
  return (
    <section className={styles.main_contract_info}>
     <div className={styles.border}></div>
      {sortedBands?.map((item) => {
        const element = selectedBands(item, made[0].bands,modalHandler);
        return element;
      })}
      <div className={styles.finished_contract}>
          <div className={styles.confirm_contract}> <img src={confirmImage} alt="تکمیل اطلاعات"/></div>
          <div className={styles.get_contract_container}>
              <p>قرارداد شما آماده شد!</p>
              <button className={styles.get_contract_btn}><span>دریافت قرارداد</span><img src={blueArrowImage} alt="دریافت قرارداد"/></button>
          </div>
      </div>
    </section>
  );
};

export default ContractInfo;
