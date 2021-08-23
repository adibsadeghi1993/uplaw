import React from 'react'
import "./AuthPhone.css"
import circleArrowImage from "../../../asstes/circlearrow.svg"
import lockImage from "../../../asstes/lock.svg"
import phoneImage from "../../../asstes/phone.svg"


const AuthPhone = () => {
    return (
        <>
            <div className="authphone_phonenumber">
                <input type="text" placeholder="شماره تلفن خود را وارد کنید"/>
                <button><img src={circleArrowImage} alt="circle arrow image" /></button>
                <img className="phoneImage" src={phoneImage} alt="phone Image" />
            </div>
            <div className="authphone_sendcode">
                <p>ارسال مجدد کد تا 05:00 دقیقه</p>
            </div>
            <div className="authphone_code">
                <input type="text" placeholder="کد ارسال شده را وارد کنید"/>
                <img src={lockImage} alt="lockImage"/>
                
            </div>
            
        </>
    )
}

export default AuthPhone
