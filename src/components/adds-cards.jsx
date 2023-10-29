import React from "react";
import Style from "../styles/adds.module.css";
import Image from "../assets/crop.png";

// react icons
import { AiOutlineClose,  } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import LikeComment from "../components/likecomment";

const AddsCards = () => {
  return (
    <div>
      <div className={Style.parentDiv}>
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

        <div className={Style.content}>
          <div className={Style.contentText}>
            <p>Lorem ipsum dolor sit  consecteamettur adipisicing elit. consecteamettur adipisicing elit.</p>

          </div>
          <div className={Style.contentOptions}>
            <button>Online Courses</button>
            <button>Books</button>
            <button>Research Parpers</button>
            <button>conference and workshop</button>
            <p>100 votes.1w left</p>
          </div>
        </div>

       <div>
        <LikeComment />
       </div>
      </div>
    </div>
  );
};

export default AddsCards;
