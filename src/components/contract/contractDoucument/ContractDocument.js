import React from "react";
import { useSelector } from "react-redux";
import ContractHeader from "../../userInfo/commonFiles/contractHeader/ContractHeader";
import UserProfile from "../../userInfo/commonFiles/userProfile/UserProfile";
import styles from "./ContractDocument.module.css";
import ShowContract from "./showContract/ShowContract";

const ContractDocument = () => {
  const { myTeam: team } = useSelector((state) => state.team);
  const { choosedContract } = useSelector((state) => state.contract);
  return (
    <main className={styles.main_contractDocument}>
      <section className={styles.profilesection}>
        <UserProfile subject="adjust" opacity="opacity" team={team} />
      </section>
      <section className={styles.contractDocument_info}>
        <div className={styles.contractDocument_detail}>
          <ContractHeader
            opacity="1"
            width="100%"
            ContractName={choosedContract}
          />

          <ShowContract
            path="/contract/customerSigntureContract"
            choosedContract={choosedContract}
          />
        </div>
      </section>
    </main>
  );
};

export default ContractDocument;
