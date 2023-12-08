import React from "react";
import Style from "../styles/user-profile-info.module.css";
import BGImage from "../assets/crop.png";
import RecentCard from "./destop/recent-card";

import { BiSolidLabel } from "react-icons/bi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const UserProfileInfo = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.bgImageDiv}>
          <img src={BGImage} alt="" />
        </div>

        <div className={Style.ImageNameJob}>
          <img src={BGImage} alt="" />
          <div className={Style.NameOcuppation}>
            <h5>Prince H Sylvanus</h5>
            <p>Software Engineer | Computer Engineer | Javascript </p>
          </div>

          <hr />
        </div>
        {/* <hr /> */}
        <div className={Style.proViewBox}>
          <div className={Style.proView}>
            <p>Profile Viewers</p>
            <h6>1000</h6>
          </div>
          <div className={Style.proView}>
            <p>Post Impression</p>
            <h6>1000</h6>
          </div>
        </div>
        {/* <hr /> */}
        <div className={Style.premiumBox}>
          <p>Get hired 2.6x faster with premium</p>
          <h6><MdOutlineCheckBoxOutlineBlank color="gold"  size={18} /> Try  for NGN0</h6>
        </div>
        {/* <hr /> */}
        <div className={Style.iconBox}>
        <BiSolidLabel />
          <p>My item</p>
        </div>
       
      </div>
      <div className={Style.recentDiv}>
          <RecentCard />
        </div>
    </>
  );
};

export default UserProfileInfo;
