import React from "react";
import Style from "../styles/usercard.module.css";
import Hope from "../assets/hope.jpg";
import LikeComment from "../components/likecomment";
import UsernameFollow from "./username-follow";
const UserCard = () => {
  return (
    <div>
      {/* <h1>USER CARDS</h1> */}

      <div className={Style.parentDiv}>
        

        <UsernameFollow />
        <div className={Style.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero
            reiciendis officia illo minus mollitia.dd
          </p>
        </div>

        <div className={Style.imgBox}>
          <img src={Hope} alt='' />
        </div>
        <div className={Style.comment}>
          <LikeComment />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
