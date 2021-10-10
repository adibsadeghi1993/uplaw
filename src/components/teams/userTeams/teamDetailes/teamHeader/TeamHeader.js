import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./teamHeader.module.css"

const TeamHeader = () => {
    const selectedTeam= useSelector(state => state.team.selectedTeam)
    return (
        <section>
         <div>
             <div>
                 <p>{selectedTeam}</p>
                 <p>تیم های من</p>
                 <p>ایجاد/جستجوی تیم جدید</p>
             </div>
             <div>
                 به دنبال تیم خاصی هستم
             </div>

         </div>

            
        </section>
    )
}

export default TeamHeader
