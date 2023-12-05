import React from 'react'
import Hope from '../assets/hope.jpg'
import Style from '../styles/name-com-follow.module.css'

const NameComFollow = () => {
  return (

    <>
    
    <div className={Style.container}>
        <div className={Style.imgDiv}> 
            <img src={Hope} alt=''/>
        </div>
        <div className={Style.textPart}>
            <h5>Hope Akpan</h5>
            <p>Chemical Engineer</p>
            <button>+ Follow</button>
        </div>
    </div>
    </>
  )
}

export default NameComFollow