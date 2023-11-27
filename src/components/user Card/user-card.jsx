import React from "react";
import Style from "../../styles/usercard.module.css"
// import Hope from "../assets/hope.jpg";
import LikeComment from "../likecomment";
import UsernameFollow from "./username-follow";
import UserText from "./user-text";
import UserImage from "./user-image";
const UserCard = () => {
  return (
    <div>
      {/* <h1>USER CARDS</h1> */}

      <div className={Style.parentDiv}>
        <div>
          <UsernameFollow 
          
          />
        </div>
        <div>
          <UserText />
        </div>
        <div>
          <UserImage />
        </div>

        
        <div className={Style.comment}>
          <LikeComment />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
