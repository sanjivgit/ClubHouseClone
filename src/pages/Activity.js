import React from 'react'
import style from "../style/Activity.module.css";
import { Link } from "react-router-dom"
import data from "../Data/Activity.json";

export default function Activity() {
    return (
        <div className={style.activityContainer}>
            <div className={style.header}>
                <Link to="/home">
                    <img style={{width: "12px"}} src="/images/left-arrow.png" alt="" />
                </Link>
                <h6>Activity</h6>
            </div>
            <div className={style.mainActivity}>
                {data.map((item) => (
                    <div className={style.activity}>
                        <div className={style.ImgDescription}>
                            <img src="/images/second_profile.jpg" alt="" />
                            <p>{item.description}</p>
                        </div>
                        <div className={style.lastActive}>
                            <p>{item.lastActiveTime}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    )
}
