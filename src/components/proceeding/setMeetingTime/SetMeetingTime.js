import React from 'react'
import styles from "./setMeetingTime.module.css"

const SetMeetingTime = () => {
    return (
        <div>
              <div className={styles.select_option}>
          <select className={styles.select_proceeding}>
            <option>صورت جلسه مورد نظر خود را جستجو کنید.</option>
            <option>صورت جلسه</option>
          </select>
        </div>
        </div>
    )
}

export default SetMeetingTime
