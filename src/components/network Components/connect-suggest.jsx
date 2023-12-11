import React from "react";
import Style from "../../styles/connect-suggest.module.css";
import Hope from "../../assets/hope.jpg";
const ConnectSuggest = () => {
  return (
    <>
      <div className={Style.containerCard}>
        <div className={Style.imgbox}>
          <div className={Style.imgBackground}>
            <img src={Hope} alt="" />
          </div>
          <div className={Style.profileImg}>
            <img src={Hope} alt="" />
          </div>
        </div>
        <div className={Style.nameProfession}>
          <h4>Hope Akpan</h4>
          <p>Chemical Engineer</p>
        </div>
        <div className={Style.mutualConnect}>
          <p>1 Mutual Connections</p>
        </div>
        <div>
            <button>Connect</button>
        </div>
      </div>
    </>
  );
};

export default ConnectSuggest;
