import React from 'react'
import styles from "./setMeetingTimeDetailes.module.css"

const SetMeetingTimeDetailes = () => {
    return (
        <div>
              <div>
              <div className={styles.select_option}>
          <select className={styles.select_proceeding}>
            <option>صورت جلسه مورد نظر خود را جستجو کنید.</option>
            <option>صورت جلسه</option>
          </select>
        </div>
        </div>
        </div>
    )
}

export default SetMeetingTimeDetailes
