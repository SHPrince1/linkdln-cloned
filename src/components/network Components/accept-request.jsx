import React from "react";
import Style from '../../../src/styles/accept-request.module.css'


import Image from '../../assets/hope.jpg'
const AcceptRequest = () => {
  return (
    <>
   
    <div className={Style.container}>
      <div className={Style.imgText}>
        <div className={Style.imgBox}>
          <img src={Image} alt="" />
        </div>

        <div>
          <div>
            <h4>Hope Akpan</h4>
            <p>I am a Chemical Engineer</p>
          </div>
          <div className={Style.mutualConnection}>
            <p>7 mutual connections</p>
          </div>
          <p>3 days ago</p>
        </div>
      </div>
      <div className={Style.acceptRejectBox}>
        <div>X</div>
        <div>A</div>
      </div>
    </div>
    </>
  );
};

export default AcceptRequest;
