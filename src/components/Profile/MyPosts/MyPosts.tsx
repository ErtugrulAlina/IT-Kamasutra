import React, {useState} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {v1} from "uuid";
import {MessagesDataType} from "../../../Redux/state";


type MyPostsType = {
    postData: MessagesDataType
}

const MyPosts = (props: MyPostsType) => {
    const [posts, setPosts] = useState<MessagesDataType>(props.postData)

    let addPost = (title: string) => {
        const newPost = {id: v1(), message: title, likesCount: 0}
        setPosts([newPost, ...posts])
    }

    const [title, setTitle] = useState("")

    const addTitle = () => {
        addPost(title)
        setTitle("")
    }

    const deletePost = (id: string) => {
        const newPosts = posts.filter((p) => p.id !== id)
        setPosts(newPosts)
    }

    const messagesJSXElements = posts.map((d) => <Post id={d.id}
                                                       message={d.message}
                                                       likesCount={d.likesCount}
                                                       deletePost={deletePost}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.textarea}>
                <div>
                    <textarea value={title} onChange={(e) => setTitle(e.currentTarget.value)} name=""
                              id="">text</textarea>
                </div>
                <div>
                    <button onClick={addTitle}>Send</button>
                </div>
            </div>
            <div className={s.posts}>{messagesJSXElements}</div>
        </div>
    )
}
export default MyPosts