import React from 'react'
import style from "../style/header.module.css"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div className={style.Header}>
            <Link exact to="/explore">
                <img src="/images/search.png" alt="" />
            </Link>
            <div className={style.nav_items}>
                <Link exact to="/friend_invite">
                    <img src="/images/invitation.png" alt="" />
                </Link>
                <Link exact to="/upcoming">
                    <img src="/images/calendar.png" alt="" />
                </Link>
                <Link exact to="/activity">
                    <img src="/images/bell.png" alt="" />
                </Link>
                <Link exact to="/profile">
                    <img src="/images/profile.png" alt="" />
                </Link>
            </div>
        </div>
    )
}
