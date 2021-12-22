import React from 'react'
import style from "../style/explore.module.css"
import { Link } from "react-router-dom"

export default function SubHeader() {
    return (
        <div className={style.head}>
            <Link to="/home">
                <img style={{width:"10px", marginBottom: "0.5em"}} src="/images/left-arrow.png" alt="" />
            </Link>
            <h3>EXPLORE</h3>
        </div>
    )
}
