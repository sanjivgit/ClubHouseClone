import React from 'react'
import style from "../style/explore.module.css"
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../Data/Explore.json";
import { Input } from "antd";
import SubHeader from '../components/SubHeader';

export default function Explore() {
    const {people, conversation} = data;
    return (
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <SubHeader />
                <Input
                    style={{
                        border: "none",
                        borderRadius: "0.8em",
                        backgroundColor: "#f4f4f4",
                    }}
                    placeholder='Find People and Club-house Members'
                    prefix={<img style={{width: "12px", marginRight: "0.2em"}} src="/images/search.png" alt="" />}
                >
                </Input>
            </div>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContainer}>
                {people.map((item) => (
                    <div>
                        <div className="d-flex align-items-center mb-2">
                            <img src="/images/second_profile.jpg" alt="" />
                            <div style={{marginLeft: "5px"}}>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div> 
                ))}
                <button className={style.showMore}>
                    Show more people <DownOutlined/>
                </button>
            </div>
            <h6 style={{marginTop: "50px"}}>FIND CONVERSATION ABOUT</h6>
            <div className="row mx-0">
                {conversation.map((item) => (
                    <div className="col-6 px-2 mb-3">
                        <div className={style.conversationCard}>
                            <h6>
                                <FireOutlined style={{marginRight: "0.2em"}} />
                                {item.title}
                            </h6>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
