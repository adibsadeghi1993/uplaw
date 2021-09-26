
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./createMeeting.module.css"
import CreateMeetingDetailes from './createMeetingDetailes/CreateMeetingDetailes'


const CreateMeeting = () => {
     const {myTeam}=  useSelector(state=>state.team)
   
    return (
        <main className={styles.main_proceeding}>
        <section className={styles.profilesection}>
         <UserProfile activeSubject="صورت جلسه" opacity="opacity" team={ myTeam}/>
        </section>
        <section className={styles.proceeding_info}>
         <div className={styles.proceeding_detail}>
           <h1>صورت جلسه/ </h1>
                <CreateMeetingDetailes/>
         </div>
        </section>
      </main>
    )
}

export default CreateMeeting
