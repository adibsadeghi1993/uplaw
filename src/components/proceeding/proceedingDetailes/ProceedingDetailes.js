
import React,{useState,useContext} from 'react'
import fingerImage from "../../../asstes/finger.png"
import blueArrowImage from "../../../asstes/blue arrow.svg"
import { UserInfoContext } from '../../common/contextInfo/ContextInfo'
import styles from "./procedingDetailes.module.css"


const ProceedingDetailes = () => {
    const [teamStatus, setTeamStatus] = useState("myTeam")
    const context = useContext(UserInfoContext)
    const {team,teamIncludedMe}=context

    const myTeamHandler=()=>{
        setTeamStatus("myTeam")
    }
    const teamIncludedMeHandler=()=>{
        setTeamStatus("teamIncludedMe")
    }

    return (
        <main className={styles.proceeding_main}>
            <section >
                <div className={styles.proceeding_create_team}>
                    <h1>این صفحه برای ساختن هر نوع صورت جلسه ایه! تو میتونی برای هر صورت جلسه اعضای مورد نظرت رو دعوت کنی و صورت جلسه رو درست کنی.</h1>
                    <img src={fingerImage} alt="تنظیم صورت جلسه"/>
                </div>
              <div className={styles.select_option}>
              <select className={styles.select_proceeding}>
                   <option>صورت جلسه مورد نظر خود را جستجو کنید.</option>
                   <option>صورت جلسه</option>
               </select>
              </div>
             <p className={styles.guide_paragraf}>تیم مورد نظر خود را برای ساخت صورت جلسه انتخاب کنید.</p>
            </section>
            <section className={styles.user_teams}>
                <div className={styles.choose_team}>
                    <p onClick={myTeamHandler} className={teamStatus==="myTeam" ?styles.active:styles.userTeam}>تیم های من</p>
                    <p onClick={teamIncludedMeHandler} className={teamStatus==="teamIncludedMe" ?styles.active:styles.userTeam}>تیم هایی که در ان عضو هستم</p>
                </div>

                {teamStatus==="myTeam"?(
                    team.map((item)=>{
                        return <div>
                            <img src={item.src} alt="تیم"/>
                            <p>{item.teamName}</p>
                            <button><span>انتخاب</span> <img src={blueArrowImage} alt="انتخاب"/></button>
                        
                        </div>
                    })
                ):null}
                  {teamStatus==="teamIncludedMe"?(
                teamIncludedMe.map((item)=>{
                        return <div>
                            <img src={item.src} alt="تیم"/>
                            <p>{item.teamName}</p>
                            <button><span>انتخاب</span> <img src={blueArrowImage} alt="انتخاب"/></button>
                        
                        </div>
                    })
                ):null}


            </section>
            
        </main>
    )
}

export default ProceedingDetailes
