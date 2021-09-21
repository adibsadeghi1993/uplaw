import React,{useContext,useState, useEffect} from 'react'
import styles from "./adjustContract.module.css"
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile';
import ContractHeader from '../../userInfo/commonFiles/contractHeader/ContractHeader';
import ContractInfo from './contractInfo/ContractInfo';
import { UserInfoContext } from '../../common/contextInfo/ContextInfo';


const AdjustContract = (props) => {
  const [ContractName, setCntractName] = useState("")
  console.log(props)
  console.log(props.match.params.id)
  useEffect(() => {
   setCntractName(props.match.params.id)
  }, [props.match.params.id])
  const context = useContext(UserInfoContext)
  const {team}=context
        return (
           
            <main className={styles.main_adjustContract}>
            <section className={styles.profilesection}>
             <UserProfile opacity="opacity" team={team}/>
            </section>
            <section className={styles.adjustContract_info}>
             <div className={styles.adjustContract_detail}>
                <ContractHeader ContractName={ContractName} />
                <ContractInfo/>
             </div>
            </section>
          </main>
        )
}

export default AdjustContract
