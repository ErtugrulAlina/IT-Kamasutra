import React from "react";
import s from "./Post.module.css"

type PropTypes = {
    id: string
    message: string;
    likesCount: number
    deletePost: (id: string) => void
}

const Post = (props: PropTypes) => {
    return (
        <div className={s.item}>
            <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png"
                 alt=""/>
            <span>{props.message}</span>
            <div>like {props.likesCount}</div>
            <button onClick={() => props.deletePost(props.id)}>Delete Post</button>
        </div>

    )
}

export default Post