import React, { useState} from "react";
import FingerImgae from "../../../common/fingerImgae/FingerImgae";

import styles from "./searchDetailes.module.css"
import SearchSpecialTeam from "../../../common/searchSpecialTeam/SearchSpecialTeam";

const SerachDetailes = () => {



const [request, setRequest] = useState(null);








  return (
    <div className={styles.search_special_team}>
      <h3>/تیم های من/ساخت تیم جدید</h3>
      <div className={styles.finger}>
      <FingerImgae>
        تو این صفحه میتونی تیم هایی که توشون عضو هستی یا داری رو ببینی.میتونی
        اون هارو مدیریت کنی یا تیم جدید ایجاد کنی.
      </FingerImgae>
      </div>
      <section className={styles.teams}>
        <div>
          <p className={styles.selectedTeam}>تیم آپلا</p>
          <p className={styles.myTeam}> تیم های من</p>
        </div>
        <div>
          <p className={styles.specialTeam}>به دنبال تیم خاصی میگردم</p>
        </div>
      </section>

     
       <SearchSpecialTeam request={request} setRequest={setRequest}  />
    </div>
  );
};

export default SerachDetailes;
