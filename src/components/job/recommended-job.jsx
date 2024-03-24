import React from "react";
import Style from "../../styles/reocommended-job-compo.module.css";
import Image from "../../assets/lindn img.png";

import { HiXMark } from "react-icons/hi2";

const RecommendedJob = () => {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.imgDivText}>
          <div className={Style.imgDiv}>
            <img src={Image} alt="" />
          </div>
          <div className={Style.textDiv}>
            <h5>Frontend Engineer</h5>
            <p>Smart Hub Network</p>
            <span> <span>Nigeria </span>
              <span>(Remote)</span>
            </span>
            
          </div>
        </div>

        <div className={Style.markBox}>
        <HiXMark  size={20} />
        </div>
      </div>
    </div>
  );
};

export default RecommendedJob;
