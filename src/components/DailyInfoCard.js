import React from 'react'
import style from "../style/DailyInfoCard.module.css"
import data from "../Data/DailyCard";

export default function DailyInfoCard() {
    return (
        <div className={style.DailyCard}>
            {data.map((item) => (
                <div>
                    <span>{item.time}</span>
                    <div>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
