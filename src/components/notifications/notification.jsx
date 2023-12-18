import React from "react";
import Style from "../../styles/notification.module.css";
import Image from '../../assets/lindn img.png'

const Notifications = () => {
  return (
    <>
    {/* <div className={Style.mutliplesBtn}>
        <button>All</button>
        <button>My post</button>
        <button>Mentions</button>
    </div> */}
      <div className={Style.container}>
        <div className={Style.imagDiv}>
          <img src={Image} alt="" />
        </div>
        <div className={Style.jobBtn}>
          <h5>ReactJs jobs: 4 opportunities in Nigeria</h5>
          <button>View jobs</button>
        </div>
        <div className={Style.hourIcon}>
          <h4>2h</h4>
          <p>Icon</p>
        </div>
      </div>
    </>
  );
};

export default Notifications;
