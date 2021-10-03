import React,{useContext,useState, useEffect} from 'react'
import styles from "./adjustContract.module.css"
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile';

import ContractInfo from './contractInfo/ContractInfo';
import { useSelector } from 'react-redux';
import Progress from '../../common/contractHeader/ContractHeader';




const AdjustContract = (props) => {
  const [ContractName, setCntractName] = useState("")
  console.log(props)
  console.log(props.match.params.id)
  useEffect(() => {
   setCntractName(props.match.params.id)
  }, [props.match.params.id])

  const team= useSelector(state=>state.team.myTeam)
  console.log(team)
        return (
           
            <main className={styles.main_adjustContract}>
            <section className={styles.profilesection}>
             <UserProfile subject="adjust" opacity="opacity" team={team}/>
            </section>
            <section className={styles.adjustContract_info}>
             <div className={styles.adjustContract_detail}>
                <Progress ContractName={ContractName} />
                <ContractInfo/>
             </div>
            </section>
          </main>
        )
}

export default AdjustContract
