import React from 'react'
import Style from '../styles/addcardheader.module.css'
import { BsThreeDotsVertical } from "react-icons/bs"; 
import { AiOutlineClose,  } from "react-icons/ai";
import Image from "../assets/crop.png";

const AddsCardHeader = (props) => {
  return (
    <div>

<div className={Style.header}>
          <div className={Style.headerContent}>
            <img src={Image} alt='' />

            <div className={Style.headerText}>
              <h4>Software Engineer & Students</h4>
              <p>Prince Sylvanus. 3rd</p>
              <p>3h</p>
            </div>
          </div>
          <div className={Style.headerIcons}>
            <BsThreeDotsVertical className={Style.headerIcon} />

            <AiOutlineClose className={Style.headerIcon} />
          </div>
        </div>

        <div className={Style.title}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            ut ipsam ad adipisci odio necessitatibus{" "}
          </p>
        </div>


    </div>
  )
}

export default AddsCardHeader