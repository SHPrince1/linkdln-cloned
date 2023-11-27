import React from 'react'
import Style from "../../styles/usernamefollow.module.css"
// import Image from "../../assets/crop.png"
import UserNameJob from './user-name-job'

const UsernameFollow = () => {
  return (
    <div>

<div className={Style.nameBox}>
           
            <div>
              <UserNameJob />
            </div>
           
         
          <div className={Style.follow}>
            <h4>+ Follow</h4>
          </div>
        </div>
    </div> 
  )
}

export default UsernameFollow