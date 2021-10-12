import React,{useState} from 'react'
import styles from "./newTeamHeader.module.css"

const NewTeamHeader = () => {
const [active, setActive] = useState("basicInfo")

const inviteHandler=()=>{
    setActive("invite")
}

const basicInfoHandler=()=>{
    setActive("basicInfo")
}
    return (
        <section className={styles.new_team_header}>
            <div  onClick={basicInfoHandler} className={active==="basicInfo"?styles.active:styles.inActive}>
                <p>اطلاعات پایه</p>
            </div>
            <div onClick={inviteHandler}  className={active==="invite"?styles.active:styles.inActive}>
                <p>دعوت اعضا</p>
            </div>
            
        </section>
    )
}

export default NewTeamHeader
