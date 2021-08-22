import React from 'react'
import circleArrowImage from "../../../asstes/circlearrow.svg"

const AuthPhone = () => {
    return (
        <section className="authphone_section">
            <div>
                <input type="text" placeholder="شماره تلفن خود را وارد کنید"/>
                <button><img src={circleArrowImage} /></button>
            </div>
            
        </section>
    )
}

export default AuthPhone
