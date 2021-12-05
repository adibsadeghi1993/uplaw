import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <p style={{backgroundColor:"#f6f6f6" ,padding:"10px"}}> این صحفه لندینگ است که من نزدم همچنین برای دیدن یوای هایی که من زدم لطفا بر روی لینکه مربوطه کلیک کنید.</p>
          <Link to="/dashbord">  <h5>رفتن به صفحه داشبورد</h5></Link>
          <Link to="/auth/google">  <h5>رفتن به صفحه ثبت نام و ورود</h5></Link>
          <Link to="/team">  <h5>رفتن به صفحه تیم ها</h5></Link>
          <Link to="/myTeam">  <h5>رفتن به صفحه تیم های من</h5></Link>
          <Link to="/createNewTeam">  <h5>رفتن به صفحه ایجاد تیم جدید</h5></Link>
          <Link to="/specialTeam">  <h5>رفتن به صفحه یک تیم خاص</h5></Link>
          <Link to="/inviteMember">  <h5>رفتن به صفحه دعوت اعضا به تیم</h5></Link>
          <Link to="/teamProfile">  <h5>رفتن به صفحه پروفایل تیم</h5></Link>
          <Link to="/teamAdmin">  <h5>رفتن به صفحه ادمین تیم</h5></Link>
          <Link to="/advise">  <h5>رفتن به صفحه صورت جلسه</h5></Link>
          <Link to="/setConsultantTime">  <h5>رفتن به صفحه انتخاب زمان مشاوره</h5></Link>
          <Link to="/confirmConsultant">  <h5>رفتن به صفحه تایید مشاره</h5></Link>
          <Link to="/searchConsultant">  <h5>رفات به صفحه انتخاب نوع مشاوره</h5></Link>
          <Link to="/adviseType">  <h5>رفتن به صفحه انتخاب نوع صورت جلسه</h5></Link>
          <Link to="/meeting/setMeetingTime">  <h5>رفتن به صفحه انتخاب زمان صورت جلسه</h5></Link>
          <Link to="/meeting/signtureMeeting">  <h5>رفتن به صفحه امضا صورت جلسه</h5></Link>
          <Link to="/contract">  <h5>رفتن به صفحه قرارداد ها</h5></Link>
          
         
        </div>
    )
}

export default Home



