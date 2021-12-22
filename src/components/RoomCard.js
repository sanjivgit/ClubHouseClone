import React from 'react'
import data from "../Data/RoomCard.json"
import style from "../style/RoomCard.module.css"
import { BsFillChatDotsFill, BsChatDots, BsFillPersonFill } from "react-icons/bs";

export default function RoomCard() {
    return (
        <div>
            {data.map((item) => (
                <div className={style.Room_Card}>
                    <h6>{item.title}</h6>
                    <h2>{item.sub_title}</h2>
                    <div className={style.profile_details}>
                        <div className={style.Room_Img}>
                            <img src="/images/first_profile.jpg" alt="" />
                            <img src="/images/second_profile.jpg" alt="" />
                        </div>
                        <div className={style.Room_Members}>
                            {item.members.map((profile)=>( 
                                    <p>
                                        {profile.first_name +" "+ profile.last_name} <BsChatDots />
                                    </p>
                            ))}
                            <p className="contact d-flex align-items-center">
                                <span>1.8 <BsFillPersonFill/></span>
                                <span>5 <BsFillChatDotsFill/></span> 
                            </p>    
                        </div>
                    </div>   
                </div>
            ))}
            
        </div>
    )
}
