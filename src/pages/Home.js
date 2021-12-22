import React, { useState } from 'react'
import DailyInfoCard from '../components/DailyInfoCard'
import Header from '../components/Header'
import RoomCard from '../components/RoomCard'
import style from "../style/Home.module.css"
import { AiOutlinePlus } from "react-icons/ai"
import { BsGrid3X3Gap } from "react-icons/bs"
import data from "../Data/RoomCard.json"
import BottomSheet from '../components/BottomSheet'
import newRoomData from "../Data/newRoom.json"

export default function Home() {
    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (
        <div>
            
            {loaderVisibility ? (
                <div style={{
                    position: "fixed",
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: '100',
                    height: '85%'
                }}> 
                    <img style={{height: '50px'}} src="/images/spinner.gif" alt="" />
                </div>
            ) : (
                ''
            )}
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
                <RoomCard />
            </div>
            <div className={style.active_btn}>
                <button onClick={() => setSheetVisible(true)}>
                    <AiOutlinePlus className="mar"/>
                    Start to room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
            <BottomSheet
            sheetTitle="start room"
            setSheetVisible={(item) => setSheetVisible(item)}
            sheetVisible={sheetVisible}
            cardDetail={data.find((item) => item.id == cardId)}
            setItemsVisible={(item) => setItemsVisible(item)}
            setSheetCreateRoom={(item) => {
                setLoaderVisibility(true);
                setTimeout(() => {
                    setSheetCreateRoom(item);
                    setLoaderVisibility(false);
                }, 1000);
            }}
            />

            <BottomSheet 
                sheetTitle="new room"
                setSheetVisible={(item) => setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item) => setItemsVisible(item)}
            />
        </div>
    )
}
