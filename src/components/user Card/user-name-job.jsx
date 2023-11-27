import React from 'react'
import Style from "../../styles/usernamefollow.module.css"
import Image from "../../assets/hope.jpg"
const UserNameJob = () => {
  return (
    <div>

<div className={Style.imgTextName}>
                <img src ={Image} alt='' />
                <div className={Style.nameText}>
            
            <div className={Style.name}>
              <h4>Hope Akpan</h4> {''}.3rd
            </div>
            <p>Chemical Engineer</p>
            <p>2d</p>
          </div>
            </div>

    </div>
  )
}

export default UserNameJob