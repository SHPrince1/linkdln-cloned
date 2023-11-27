import React from 'react'

import Style from "../styles/adds.module.css";
import Image from "../assets/crop.png";
import LikeComment from '../components/likecomment';
// react icons
// import { AiOutlineClose,  } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";


const CompanyCard = () => {
  return (
    <div>
        
        <div className={Style.parentDiv}>
        <div className={Style.header}>
          <div className={Style.headerContent}>
            <img src={Image} alt='' />

            <div className={Style.headerText}>
              <h4>Microsoft </h4>
              <p>12500 followers</p>
              <p>Promoted</p>
              
            </div>
          </div>
          <div className={Style.headerIcons}>
            <BsThreeDotsVertical className={Style.headerIcon} />

           
          </div>
        </div>
        <div className={Style.title}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            ut ipsam ad adipisci odio necessitatibus{" "}
          </p>
        </div>

        <div className={Style.content}>
          <div className={Style.contentText}>
           

          </div>
          <div className={Style.imgBox}>
          <img src={Image} alt='' />
          <div className={Style.nameApplySingn}>
            <p>International Banking</p>
            <a href='/www./js.com'>Apply</a>
          </div>
        </div>
        </div>

       <div>
        <LikeComment />
       </div>
      </div>
        
    </div>
  )
}

export default CompanyCard