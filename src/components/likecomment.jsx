import React from 'react'
import Style from '../styles/likecomments.module.css'

// react icons
import { AiOutlineClose, AiFillLike,AiOutlineComment } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import {BiRepost} from 'react-icons/bi'
const LikeComment = () => {
  return (
    <div>

<div>
            <div className={Style.likeComments}>
                <div className={Style.numLikes}>< AiFillLike className={Style.numLikesIcon} /><p>21</p></div>
                <div>Comment .repost</div>
            </div><hr />
            <div className={Style.commentDiv}>
                <div className={Style.commentDivIcon}>
                    < AiFillLike />
                    <p>Like</p>
                </div>
                <div className={Style.commentDivIcon}>
                    <AiOutlineComment />
                    <p>Comment</p>
                </div>
                <div className={Style.commentDivIcon}>
                    <BiRepost />
                    <p>Repost</p>
                </div>
                <div className={Style.commentDivIcon}>
                    < BsFillSendFill />
                    <p>Send</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LikeComment