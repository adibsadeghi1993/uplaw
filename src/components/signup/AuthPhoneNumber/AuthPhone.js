import React from 'react'
import circleArrowImage from "../../../asstes/circlearrow.svg"
import lockImage from "../../../asstes/lock.svg"

const AuthPhone = () => {
    return (
        <section className="authphone_section">
            <div>
                <input type="text" placeholder="شماره تلفن خود را وارد کنید"/>
                <button><img src={circleArrowImage} /></button>
            </div>
            <div>
                <p>ارسال مجدد کد تا 05/00 دقیقه</p>
            </div>
            <div>
                <input type="text" placeholder="کد ارسال شده را وارد کنید"/>
                <img src={lockImage}/>
                
            </div>
            
        </section>
    )
}

export default AuthPhone
