import React from "react";
import Style from '../../styles/premium-cards-adds.module.css'
import Image from '../../assets/crop.png'
import LinkDlnImg from '../../assets/lindn img.png'

const PremiumAddsCard = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.NameAdds}>
          <p>Prince H, Unlock your linkdln potential with linkdln premium</p>
        </div>
        <div className={Style.ImgDiv}>
          <img src={Image} alt=""  className={Style.Pimage}/>
          <img src={LinkDlnImg} alt="" />
        </div>
        <div>
          <p>See who viewed your profile in the last 90 days</p>
        </div>
        <div className={Style.btnDiv}>
          <button>Try for free</button>
        </div>
      </div>
    </>
  );
};

export default PremiumAddsCard;
