import React from 'react'
import style from "../style/phoneConformation.module.css"
import { Link } from "react-router-dom"

export default function AllowNotification() {
    return (
        <div className={style.phoneConformContainer}>
            <div className="text-center">
                <h2 className="mb-4">Last, important step!</h2>
                <h2 className="mb-3">Enable notifications to know when people are talking</h2>
                <div className={style.Notification}>
                    <div className="p-3">
                        <h4>"Clubhouse" Would Like to Send You Notification</h4>
                        <p>Notification may include alerts, sounds, and icon badges</p>
                    </div>
                    
                    <div className={style.permission}>
                        <Link exact to="/home" >
                            Don't Allow
                        </Link>
                        <Link exact to="/home" >
                            Allow
                        </Link>
                        <img src="/images/hand_icon.png" alt="" />
                    </div>
                </div>
            </div>  
        </div>
    )
}
