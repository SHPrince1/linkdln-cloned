import React from 'react'
import Style from '../styles/usernamefollow.module.css'
import Image from '../assets/crop.png'

const UsernameFollow = () => {
  return (
    <div>

<div className={Style.nameBox}>
            <div className={Style.imgTextName}>
                <img src ={Image} alt='' />
                <div className={Style.nameText}>
            
            <div className={Style.name}>
              <h4>Hope Akpan </h4>.3rd
            </div>
            <p>Chemical Engineer</p>
            <p>1d</p>
          </div>
            </div>
           
         
          <div className={Style.follow}>
            <h4>+ Follow</h4>
          </div>
        </div>
    </div>
  )
}

export default UsernameFollow