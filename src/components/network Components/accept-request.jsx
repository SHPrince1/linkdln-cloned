import React from "react";
import Style from "../../../src/styles/accept-request.module.css";
import { GrFormCheckmark } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";

import Image from "../../assets/hope.jpg";
const AcceptRequest = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.imgText}>
          <div className={Style.imgBox}>
            <img src={Image} alt="" />
          </div>

          <div className={Style.NameProBox}>
            <div>
              <h4>Hope Akpan</h4>
              <p  className={Style.NameProBoxP}>I am a Chemical Engineer, with over 2 years of experience, creating long lasting solution and outstanding  providi jdjd creating long lasting solution and outstanding  providi jdjd</p>
            </div>
            <div className={Style.mutualConnection}>
              <p>7 mutual connections</p>
            </div>
            <div className={Style.postDuration}>
              <p>8 days ago</p>
            </div>
          </div>
        </div>
        <div className={Style.acceptRejectBox}>
          <div className={Style.circleX}>
          <HiXMark  size={40} />
         
          </div>
          <div className={Style.circle}>
         
          <GrFormCheckmark size={40} />

          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptRequest;
