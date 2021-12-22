import React from 'react'
import style from "../style/upcoming.module.css"
import { Link } from "react-router-dom"
import { AiOutlineBell, AiOutlineCalendar } from "react-icons/ai"
import data from "../Data/Upcoming.json"

export default function Upcoming() {
    return (
        <div className={style.upcomingContainer}>
            <div className={style.header}>
                <Link to="/home">
                    <img src="/images/left-arrow.png" alt="" />
                </Link>
                <h6>UPCOMING FOR YOU</h6>
                <AiOutlineCalendar/>
            </div>
            <h5>TODAY</h5>
            {data.map((item) => (
            <div className={style.mainUpcoming}>
                <div className={style.timeAndIcon}>
                    <p>{item.time}</p>
                    <AiOutlineBell />
                </div> 
                <h6>{item.title}</h6> 
                <div className={style.upcomingImages}>
                    <img src="/images/first_profile.jpg" alt="" />
                    <img src="/images/second_profile.jpg" alt="" />
                    <img src="/images/first_profile.jpg" alt="" />
                    <img src="/images/second_profile.jpg" alt="" />
                </div> 
                <p>{item.description}</p>
            </div>
            ))}
        </div>
    )
}
