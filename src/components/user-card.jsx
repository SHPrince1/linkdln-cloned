import React from "react";
import Style from "../styles/usercard.module.css";
import Image from "../assets/crop.png";
import LikeComment from "../components/likecomment";
import UsernameFollow from "./username-follow";
const UserCard = () => {
  return (
    <div>
      {/* <h1>USER CARDS</h1> */}

      <div className={Style.parenDiv}>
        

        <UsernameFollow />
        <div className={Style.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero
            reiciendis officia illo minus mollitia.
          </p>
        </div>

        <div className={Style.imgBox}>
          <img src={Image} />
        </div>
        <div className={Style.comment}>
          <LikeComment />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
