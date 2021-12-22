import React from 'react'
import style from "../style/phoneConformation.module.css"
import {Link} from "react-router-dom";

export default function CodeConfirm() {
    return (
        <div className={style.phoneConformContainer}>
            <Link exact to= "/get_username" className={style.backBtn} >
                    <img src="/images/left-arrow.png" alt="" />
            </Link>
            <div className="text-center">
                <h1 style={{width:"100%", maxWidth: "250px", marginBottom: "1em"}}>Enter the code we just texted you</h1>
                <input type="text" style= {{
                    width:"100%", 
                    outline: "none",
                    border: "none",
                    textAlign: "center"
                }}/>
                <p>Don't receive it? <span>Tap to resend</span> </p>
                
            </div>
            <Link exact to="/allow_notification" className="primaryBtn arrow d-flex align-items-center" >
                    Next <img src="/images/second-arrow.png" alt="" />
            </Link>
        </div>
    );
}
