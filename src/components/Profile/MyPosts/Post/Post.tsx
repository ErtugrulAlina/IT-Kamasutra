import React from "react";
import s from "./Post.module.css"

type PropTypes={
    message: string;
}

const Post = (props:PropTypes) => {
    return (
        <div className={s.item}>
            <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png" alt=""/>
           <span>{props.message}</span>
        </div>

    )
}
export default Post