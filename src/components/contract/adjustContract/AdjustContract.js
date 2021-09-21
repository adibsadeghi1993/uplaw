import React,{useState} from 'react'
import styles from "./adjustContract.module.css"
import uplawImage from "../../../asstes/uplaw.png"
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile';
import ContractHeader from '../../userInfo/commonFiles/contractHeader/ContractHeader';
import ContractInfo from './contractInfo/ContractInfo';


const AdjustContract = () => {
    const initialState = [
        { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
      ];
      const [team, setTeam] = useState(initialState);
        return (
           
            <main className={styles.main_adjustContract}>
            <section className={styles.profilesection}>
             <UserProfile opacity="opacity" team={team}/>
            </section>
            <section className={styles.adjustContract_info}>
             <div className={styles.adjustContract_detail}>
                <ContractHeader/>
                <ContractInfo/>
              

             </div>
            </section>
          </main>
        )
}

export default AdjustContract
