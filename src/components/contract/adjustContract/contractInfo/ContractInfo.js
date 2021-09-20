import React, { useState } from "react";
import styles from "./contractInfo.module.css";
import addImage from "../../../../asstes/add.svg";
import minesImage from "../../../../asstes/mines.svg";
import confirmImage from "../../../../asstes/confirm.svg";
import { useSelector } from "react-redux";
import { selectedBands } from "./SelectedBands";

const ContractInfo = () => {
    const [openQ, setOpenQ] = useState(false)
  const state = useSelector((state) => state.contract.contract);
  const { made } = state;
  const modalHandler=()=>{
      setOpenQ(!openQ)
  }
  console.log(made);
  return (
    <section className={styles.main_contract_info}>
      {made[0].bands?.map((item) => {
        const element = selectedBands(item, made[0].bands,modalHandler);
        return element;
      })}
    </section>
  );
};

export default ContractInfo;
