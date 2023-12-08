import React from "react";
import Style from "../../styles/desktop-post.module.css";
import Image from "../../assets/crop.png";

// react icons
import { MdPermMedia, MdArticle } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import AddtToFeed from "../add-to-feed";
import UserProfileInfo from "../user-profile-info";

const DesktopPost = () => {
  return (
    <>
      <div className={Style.parentContainer}>
        <div className={Style.addFeedDiv}>
          <UserProfileInfo />
         
        </div>
     
       

        <div className={Style.container}>
          <div className={Style.inputImage}>
            <img src={Image} alt="" className={Style.proImage} />
            {/* <input placeholder="Start a post" /> */}
            <textarea placeholder="Start a post" />
          </div>
          <div className={Style.mediaEventArticle}>
            <div className={Style.mediaIcon}>
              <MdPermMedia color="blue" size={20} />
              <p>Media</p>
            </div>
            <div className={Style.mediaIcon}>
              <FaRegCalendarAlt color="gold" size={20} />
              <p>Event</p>
            </div>
            <div className={Style.mediaIcon}>
              <MdArticle color="orange" size={20} />
              <p>Article</p>
            </div>
          </div>
        </div>

        <div className={Style.addFeedDiv}>
          <AddtToFeed />
        </div>
      </div>
    </>
  );
};

export default DesktopPost;
