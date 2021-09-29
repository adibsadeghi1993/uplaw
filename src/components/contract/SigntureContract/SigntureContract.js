import React from "react";
import styles from "./signtureContract.module.css";
import ContractHeader from "../../userInfo/commonFiles/contractHeader/ContractHeader";
import UserProfile from "../../userInfo/commonFiles/userProfile/UserProfile";
import CustomerSignture from "./CustomerSignture/CustomerSignture";
import { useSelector } from "react-redux";

const SigntureContract = () => {
  const { myTeam: team } = useSelector((state) => state.team);
  const { choosedContract } = useSelector((state) => state.contract);
  return (
    <main className={styles.main_signtureContract}>
      <section className={styles.profilesection}>
        <UserProfile subject="adjust" opacity="opacity" team={team} />
      </section>
      <section className={styles.signtureContract_info}>
        <div className={styles.signtureContract_detail}>
          <ContractHeader
            opacity="1"
            width="100%"
            ContractName={choosedContract}
          />
          <CustomerSignture />
        </div>
      </section>
    </main>
  );
};

export default SigntureContract;
