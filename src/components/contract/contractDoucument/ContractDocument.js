import React,{ useContext} from 'react'
import { UserInfoContext } from '../../common/contextInfo/ContextInfo'
import ContractHeader from '../../userInfo/commonFiles/contractHeader/ContractHeader'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./ContractDocument.module.css"
import ShowContract from './showContract/ShowContract'

const ContractDocument = () => {
    const context = useContext(UserInfoContext)
    const {team,choosedContract}=context
    return (
        <main className={styles.main_contractDocument}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" team={team}/>
        </section>
        <section className={styles.contractDocument_info}>
         <div className={styles.contractDocument_detail}>
        
              <ContractHeader opacity="1" width="100%" ContractName={choosedContract}/>

        <ShowContract choosedContract={choosedContract} />
         </div>
        </section>
      </main>
    )
}

export default ContractDocument
