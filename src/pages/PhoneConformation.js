import React, { useState } from 'react'
import style from "../style/phoneConformation.module.css"
import { Link } from "react-router-dom";
import PhoneNumber from  "react-phone-number-input";

export default function PhoneConformation() {
    const [value, setValue] = useState();
    return (
        <div className = {style.phoneConformContainer}>
            <Link exact to ="/" className={style.backBtn}>
                <img src="/images/left-arrow.png" />
            </Link>
            <h1>Enter Your Number</h1>
            <PhoneNumber defaultCountry="IN" value={value} onChange={setValue}/>
            <p>By entering your number, you're agreeing to our
                <span> Terms of Service and Privacy Policy. </span>
                Thanks!
            </p>
            <Link exact to ="/code_confirm" className="primaryBtn arrow ml-2 d-flex align-items-center">
                Next <img src="/images/second-arrow.png" />
            </Link>
        </div>
    )
}
