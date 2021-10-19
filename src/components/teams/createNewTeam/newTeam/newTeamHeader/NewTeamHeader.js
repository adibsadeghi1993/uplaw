import React,{useState} from 'react'
import styles from "./newTeamHeader.module.css"
import { useHistory } from 'react-router'

const NewTeamHeader = ({subject="basicInfo",disabledBtn}) => {
const [active, setActive] = useState(subject)
 const history=useHistory()

const inviteHandler=()=>{
  if(!disabledBtn){
    setActive("invite")
    history.push("/inviteMember")
  }
 

}

const basicInfoHandler=()=>{
    setActive("basicInfo")
    history.push("/createNewTeam")
}
    return (
        <section className={styles.new_team_header}>
            <div  onClick={basicInfoHandler} className={active==="basicInfo"?styles.active:styles.inActive}>
                <p>اطلاعات پایه</p>
            </div>
            <div  onClick={inviteHandler}  className={active==="invite"?styles.active:styles.inActive}>
                <p>دعوت اعضا</p>
            </div>
            
        </section>
    )
}

export default NewTeamHeader
