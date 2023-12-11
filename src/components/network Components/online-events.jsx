import React from "react";
import Style from "../../styles/event.module.css";
import Image from "../../assets/webnar.png";
const OnlineEvents = () => {
  return (
    <>
      <div className={Style.cardContainer}>
        <div>
          <img src={Image} alt="" />
        </div>
        <div className={Style.textBtn}>
          <div className={Style.textBox}>
            <h4>Generative AI and Business</h4>
            <p>Fri, Jan 5, 2:30 pm</p>
            <p>Prince H and 4235 others attending</p>
          </div>

          <div className={Style.btnBox}>
            <button>View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineEvents;
