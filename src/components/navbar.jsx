import React from "react";
import Style from "../styles/navbar.module.css";
import linkdlnImg from "../assets/lindn img.png";
import ProfilePic from "../assets/crop.png";
// react Icons

import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
// /import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  MdNotifications,
  MdOutlineApps,
  MdOutlineArrowDropDown,
  MdAddComment,
} from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <div className={Style.genDiv}>
        <div className={Style.parentDiv}>
          <div className={Style.imgInput}>
            <div className={Style.imgDiv}>
              <a href="/">
                <img src={linkdlnImg} alt="Linkdln Logo" size={10} />
              </a>
            </div>

            <div className={Style.inputDiv}>
              <input placeholder="Search" />
            </div>
          </div>
          <div className={Style.iconsDiv}>
            <div className={Style.linkDiv}>
              <a href="/">
                <AiFillHome className={Style.icon} />
                <p>Home</p>
              </a>
            </div>
            <div className={Style.linkDiv}>
              <a href="/network">
                <FaNetworkWired className={Style.icon} />
                <p>My Network</p>
              </a>
            </div>
            <div className={Style.linkDiv}>
              <a href="/jobs">
                <ImBriefcase className={Style.icon} />
                <p>Jobs</p>
              </a>
            </div>
            <div className={Style.linkDiv}>
              <a href="/message">
                <AiFillMessage className={Style.icon} />
                <p>Messaging</p>
              </a>
            </div>
            <div className={Style.linkDiv}>
              <a href="/notifications">
                <MdNotifications className={Style.icon} />
                <p>Notification</p>
              </a>
            </div>

            <div className={Style.linkDiv}>
              <a href="www.non">
                <img src={ProfilePic} className={Style.profilePic} alt='Profile'/>
                <div className={Style.textIcon}>
                  <p className={Style.profilePicText}>Me</p>
                  <MdOutlineArrowDropDown size={22} />
                </div>
              </a>
            </div>
            <div className={Style.linkDiv}>
              <a href="wwww.lio.com">
                <MdOutlineApps className={Style.icon} />

                <div className={Style.textIcon}>
                  <p className={Style.profilePicText}>For Business</p>
                  <MdOutlineArrowDropDown size={22} />
                </div>
              </a>
            </div>
            <div className={Style.linkDiv}>
              <a href="wwww.lio.com" className={Style.premiumLink}>
                Try Premium for NGN 0.00
              </a>
            </div>
          </div>
        </div>
      </div>

      
      {/* mobile navbar */}

      <div className={Style.mobileNavGenDiv}>
        <div className={Style.mParentDiv}>
          {/* <div className={Style.imgInput}>
            <div className={Style.imgDivs}>
              <a href="">
                <img src={linkdlnImg} alt="Linkdln Logo" size={10} className={Style.mLogo} />
              </a>
            </div>

            <div className={Style.inputDiv}>
              <input  className={Style.mobileInput} />
            </div>
          </div> */}

          {/* <div className={Style.iconsDiv}> */}
          <div className={Style.linkDiv}>
            <a href="/">
              <AiFillHome className={Style.icon} />
              <p>Home</p>
            </a>
          </div>
          <div className={Style.linkDiv}>
            <a href="/">
              <FaNetworkWired className={Style.icon} />
              <p>My Network</p>
            </a>
          </div>

          <div className={Style.linkDiv}>
            <a href="/">
             

              <MdAddComment className={Style.icon} />
              <p>Post</p>
            </a>
          </div>
          <div className={Style.linkDiv}>
            <a href="/">
              <MdNotifications className={Style.icon} />
              <p>Notifications</p>
            </a>
          </div>
         
          <div className={Style.linkDiv}>
            <a href="/">
              <ImBriefcase className={Style.icon} />
              <p>Jobs</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
