import React, {ChangeEvent, RefObject, useState} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

import {ActionType, ProfileType} from "../../../Redux/store";
import {AddPostCreator, UpdateNewPostTextCreator} from "../../../Redux/profile-reducer";



type MyPostsType = {
    postData: ProfileType;
    dispatch:(action:ActionType)=>void
    newPostText: string

}


const MyPosts = (props: MyPostsType) => {
    const [posts, setPosts] = useState<ProfileType>(props.postData)

    const deletePost = (id: string) => {
        const newPosts = posts.filter((p) => p.id !== id)
        setPosts(newPosts)
    }

    const messagesJSXElements = posts.map((d) => <Post id={d.id}
                                                       message={d.message}
                                                       likesCount={d.likesCount}
                                                       deletePost={deletePost}/>)

let newPostElement= React.createRef<HTMLTextAreaElement>();
    const addPost =() =>{
        props.dispatch(AddPostCreator())
    }
const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.dispatch(UpdateNewPostTextCreator(e.currentTarget.value))}


    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.textarea}>
                <div>
                    <textarea value={props.newPostText} ref={newPostElement} onChange={changeTextArea}//value={title} onChange={(e) => setTitle(e.currentTarget.value)} name=""
                              id=""/>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div className={s.posts}>{messagesJSXElements}</div>
        </div>
    )
}
export default MyPosts