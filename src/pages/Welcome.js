import React from 'react'
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";


export default function Welcome() {
    return (
        <div className={style.welcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.welcomeInfo}>
                <p>
                    We're working hard to get Clubhouse ready for everyone! 
                    While we wrap up the finishing touches, 
                    we're adding people gradually to make sure nothing breaks
                </p>
                <p>
                    Anyone can join with an invite from an existing user-or
                    reserve your username and we'll text you if you have a 
                    friend on the app who can let you in. We are so
                    grateful you're here and can't wait to have you join!
                </p>
                <p>
                    Paul, Angela & the Clubhouse team
                </p>
            </div>
            <div className={style.activeBtn}>
               <Link exact to = "/invite" className="btn btn-primary d-flex align-items-center mb-3">
                Get your username{""}
                </Link> 
                <Link exact to ="">Have a invite text? Sign in</Link>
            </div>   
        </div>
    )
}
