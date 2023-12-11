import React from "react";
import Style from "../../../src/styles/accept-request.module.css";

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
              <p>I am a Chemical Engineer</p>
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
          <div className={Style.circle}>X</div>
          <div className={Style.circle}>A</div>
        </div>
      </div>
    </>
  );
};

export default AcceptRequest;
