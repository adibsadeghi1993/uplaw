import React from 'react'
import styles from "./contractInfo.module.css"
import addImage from "../../../../asstes/add.svg"
import minesImage from "../../../../asstes/mines.svg"
import confirmImage from "../../../../asstes/confirm.svg"

const ContractInfo = () => {
    return (
        <section className={styles.main_contract_info}>
            <div><img src={addImage} alt="تایید"/></div>
            <div><img src={minesImage} alt="تایید"/></div>
            <div><img src={confirmImage} alt="تایید"/></div>

            
        </section>
    )
}

export default ContractInfo
