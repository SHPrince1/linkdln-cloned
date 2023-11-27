import React from 'react'

import Style from "../../styles/usercard.module.css"
import Hope from "../../assets/hope.jpg";

const UserImage = () => {
  return (
    <div>


<div className={Style.imgBox}>
          <img src={Hope} alt="" />
        </div>
    </div>
  )
}

export default UserImage