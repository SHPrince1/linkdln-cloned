import React from "react";
import Style from "../../styles/reocommended-job-compo.module.css";
import Image from "../../assets/lindn img.png";

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
            <span> <p>Nigeria </p>
              <p>(Remote)</p>
            </span>
            
          </div>
        </div>

        <div>
          <p>Icon</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedJob;
