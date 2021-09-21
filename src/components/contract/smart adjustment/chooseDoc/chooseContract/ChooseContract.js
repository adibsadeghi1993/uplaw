import React, { useState,useEffect,useContext } from "react";
import styles from "./chooseContract.module.css";
import { fistContracts, secondContracts } from "./AllContract";
import AboutContract from "./aboutContract/AboutContract";
import { UserInfoContext } from "../../../../common/contextInfo/ContextInfo";

const ChooseContract = () => {
  const context = useContext(UserInfoContext)
  const {choosedContract,setChoosedContract}=context
  const [docType, setDocType] = useState("legal");
  

  const [width, setWidth]   = useState(window.innerWidth);

const updateDimensions = () => {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

  const legalHandler = () => {
    setDocType("legal");
  };
  const businessHandler = () => {
    setDocType("business");
  };

  const contractHandler=(name)=>{
      setChoosedContract(name)

  }
  const serchDocHandler=(e)=>{
    console.log(e.target.value)
  }
  return (
    <section>
      <div className={styles.search_contract}>
        <input onChange={serchDocHandler} placeholder="نام سند مورد نظر خود را وارد کنید.برای مثال : قرارداداستخدام برنامه نویس" />
        <p
          onClick={legalHandler}
          className={`${styles.legal_docs} ${
            docType === "legal" ? styles.active : null
          }`}
        >
          اسناد حقوقی
        </p>
        <p
          onClick={businessHandler}
          className={`${styles.businesses_docs} ${
            docType === "business" ? styles.active : null
          }`}
        >
          اسناد کسب و کاری
        </p>
      </div>
     <div className={styles.sample_doc}>
       {width < 768 ? <> <div className={styles.fistContracts}>
          {fistContracts.map((contract)=>{
              return <button onClick={()=>contractHandler(contract.name)} className={`${styles[contract.className]} ${contract.name === choosedContract ? styles.activeContract:null}`}>{contract.name}</button>

          })}
      </div>
      <div className={styles.secondContracts}>
      {secondContracts.map((contract)=>{
              return <button onClick={()=>contractHandler(contract.name)}  className={`${styles[contract.className]} ${contract.name === choosedContract ? styles.activeContract:null}`}>{contract.name}</button>

          })}

      </div></>:<>
      {fistContracts.map((contract)=>{
              return <button onClick={()=>contractHandler(contract.name)} className={`${styles[contract.className]} ${contract.name === choosedContract ? styles.activeContract:null}`}>{contract.name}</button>

          })}
          {secondContracts.map((contract)=>{
              return <button onClick={()=>contractHandler(contract.name)}  className={`${styles[contract.className]} ${contract.name === choosedContract ? styles.activeContract:null}`}>{contract.name}</button>

          })}

      
      
      </> }
     </div>
      <AboutContract title={choosedContract}/>
    </section>
  );
};

export default ChooseContract;
