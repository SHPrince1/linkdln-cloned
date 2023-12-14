import React from "react";
import Style from "../../styles/trending-career.module.css";
import Hope from "../../assets/hope.jpg";

const FollowCareer = () => {
  return (
    <>
      <div className={Style.container}>
        <h4>People who follow job vancancies in Nigeria also follow</h4>
        <div>
          <img src={Hope} alt="" className={Style.BGProfile} />
          <div className={Style.imgBtnDiv}>
            <div className={Style.imgDiv}>
              <img src={Hope} alt="" className={Style.profile} />
            </div>

            <div className={Style.btnDiv}>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={Style.nameStackDiv}>
          <h5>Career Talk</h5>
          <p>we will be talking about career and personal development </p>
          {/* <p>Talk about Business, inovation, Strategy</p> */}
          <div className={Style.followedDiv}>
            <img src={Hope} className={Style.followedImage} />
            <span>Jobs in Nigeria</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowCareer;
