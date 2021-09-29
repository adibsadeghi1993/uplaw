import React, { useState,useEffect } from "react";
import styles from "./chooseContract.module.css";
import AboutContract from "./aboutContract/AboutContract";
import { useSelector,useDispatch } from "react-redux";
import { choosedContractAction } from "../../../../../redux/Actions/contractActions";
import SelectContract from "./selectContract/SelectContract";


const ChooseContract = () => {
 const {choosedContract,allContracts}= useSelector(state=>state.contract)
 const dispatch = useDispatch()
 const [selectedOption, setSelectedOption] = useState(null);
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
    // setSelectedOption(name)
      dispatch(choosedContractAction(name))

  }
  // if (selectedOption) {
  //   dispatch(choosedContractAction(selectedOption))
    
  // }
  const Num=allContracts.length
  const averageNum=Math.floor(Num/2)
  let firstContracts=allContracts.slice(0,averageNum)
  let secondContracts=allContracts.slice(averageNum)


  return (
    <section>
      <div className={styles.search_contract}>
      <div className={styles.select_contract}>
      <SelectContract selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      </div>
    <div className={styles.legal_business}>
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
      </div>
     <div className={styles.sample_doc}>
       {width < 768 ? <> <div className={styles.fistContracts}>
          {firstContracts.map((contract)=>{
              return <button onClick={()=>contractHandler(contract.name)} className={`${styles[contract.className]} ${contract.name === choosedContract ? styles.activeContract:null}`}>{contract.name}</button>

          })}
      </div>
      <div className={styles.secondContracts}>
      {secondContracts.map((contract)=>{
              return <button onClick={()=>contractHandler(contract.name)}  className={`${styles[contract.className]} ${contract.name === choosedContract ? styles.activeContract:null}`}>{contract.name}</button>

          })}

      </div></>:<>
      {firstContracts.map((contract)=>{
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
