import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            My post
            <div className={s.textarea}>
                <textarea name="" id=""> text</textarea>
                <button>Send</button>
            </div>

            <div className={s.item}>
                <Post message={"Hello friends"} />
                <Post message={"It's my first post"}/>
            </div>
        </div>
    )
}
export default MyPosts