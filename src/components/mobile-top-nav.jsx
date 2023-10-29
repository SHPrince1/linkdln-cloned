import React from 'react'
import {  AiFillMessage } from "react-icons/ai";
import Style from '../styles/mobile-top-nav.module.css'
import Image from '../assets/crop.png'

const MobileTopNav = () => {
  return (
    <div>
        <div className={Style.parentDiv}>
            <div className={Style.imgDiv}>
                <img src={Image} alt='' />
            </div>

            <input  type='text' placeholder='Search'/>

            <div>
                < AiFillMessage   className={Style.icon}/>

            </div>

        </div>


    </div>
  )
}

export default MobileTopNav