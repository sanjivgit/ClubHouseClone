import React from 'react'
import style from "../style/profile.module.css";
import exploreStyle from "../style/explore.module.css"
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs"
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai"

export default function Profile() {
    return (
        <div>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} mb-0`}>
                        <Link to="/home">
                            <img style={{width: "10px"}} src="/images/left-arrow.png" alt="" />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img className={style.profile_img} src="/images/second_profile.jpg" alt="" />
                <h3>Sanjiv Kumar</h3>
                <p>@Web developer</p>
                <div className={style.follow}>
                    <p><span>0</span>followers</p>
                    <p><span>51</span>following</p>
                </div>
                <button>Add a bio</button>
                <div>
                    <button>
                        <AiOutlineTwitter/> Add Twitter
                    </button>
                    <button>
                        <AiOutlineInstagram/> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/second_profile.jpg" alt="" />
                    <div>
                        <p>Joined 21-Dec-2021</p>
                        <p>Nominated by <span>sanjiv kumar</span></p>
                    </div>
                </div>
                <p style={{marginBottom: "-0.5em"}}>Member of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </div>
    )
}
