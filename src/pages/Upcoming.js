import React, { useState } from 'react'
import style from "../style/upcoming.module.css"
import { Link } from "react-router-dom"
import { AiOutlineBell, AiOutlineCalendar, AiOutlineUpload, AiOutlineTwitter, AiOutlineCopy, AiOutlineFileAdd } from "react-icons/ai"
import data from "../Data/Upcoming.json"
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

export default function Upcoming() {
    const [sheetVisible, setSheetVisible] = useState(false);
    const [timeVisible, setTimeVisible] = useState('');
    const [titleVisible, setTitleVisible] = useState("");
    const [descriptionVisible, setDescriptionVisible] = useState("");

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
            <div className={style.mainUpcoming}
                onClick={() => {
                    setSheetVisible(true)
                    setTimeVisible(item.time)
                    setTitleVisible(item.title)
                    setDescriptionVisible(item.description)
                }}  
            >
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
            <SwipeableBottomSheet
                open={sheetVisible}
                onChange={()=>{
                    setSheetVisible(!sheetVisible)
                }}
            >   <div className={style.upcomingBottomSheet}>
                    <div className={style.closeLine}
                        onClick={() => setSheetVisible(false)}
                    ></div>
                    <div className={style.DayTimeIcon}>
                        <div>
                            <p>Today</p>
                            <p>{timeVisible}</p>
                        </div>
                        <AiOutlineBell/>
                    </div>
                    <div className={style.bottomSheetTitle}>
                        <h6>{titleVisible}</h6>
                        <div className={style.bottomSheetImages}>
                            <img src="/images/first_profile.jpg" alt="" />
                            <img src="/images/second_profile.jpg" alt="" />
                            <img src="/images/first_profile.jpg" alt="" />
                            <img src="/images/second_profile.jpg" alt="" />
                        </div> 
                        <p>{descriptionVisible}</p>
                    </div>
                    <div className={style.svgIcons}>
                        <p><AiOutlineUpload/><span>Share</span></p>
                        <p><AiOutlineTwitter/><span>Tweet</span></p>
                        <p><AiOutlineCopy/><span>Copy Link</span></p>
                        <p><AiOutlineFileAdd/><span>Add to call</span></p>
                    </div>
                    <h6>Join the room in progress</h6>
                </div>     
            </SwipeableBottomSheet>
        </div>
    )
}
