import React from "react";
import Style from "../../styles/trending-people.module.css";
import Hope from "../../assets/hope.jpg";

const TrendingPeople = () => {
  return (
    <>
      <div className={Style.container}>
        <h4>Trending people in your network</h4>
        <div>
          <img src={Hope} alt="" className={Style.BGProfile} />
          <div className={Style.imgBtnDiv}>
          <div className={Style.imgDiv}>
            <img src={Hope} alt="" className={Style.profile} />
          </div>

          <div className={Style.btnDiv}>
            <button>Follow</button>
          </div>
        </div>
        </div>

       

        <div className={Style.nameStackDiv}>
          <h5>Hope Akpan</h5>
          <p>Full Stack developer, Chemical Engineer, </p>
          <p>Talk about Business, inovation, Strategy</p>
          <div className={Style.followedDiv}>
            <img src={Hope} className={Style.followedImage} />
            <span>Followed by Samuel Eniola and 50 others</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingPeople;
