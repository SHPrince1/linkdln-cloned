import React from "react";
import Style from "../styles/user-profile-info.module.css";
import BGImage from "../assets/crop.png";

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
        <div>
          <div className={Style.proView}>
            <p>Profile Viewers</p>
            <h6>1000</h6>
          </div>
          <div className={Style.proView}>
            <p>Post Impression</p>
            <h6>1000</h6>
          </div>
        </div>
        <hr />
        <div>
          <p>Get hired 2.6x faster with premium</p>
          <h6>Try premium for NGN0</h6>
        </div>
        <hr />
        <div>
          <p>Icon</p>
          <p>My item</p>
        </div>
      </div>
    </>
  );
};

export default UserProfileInfo;
