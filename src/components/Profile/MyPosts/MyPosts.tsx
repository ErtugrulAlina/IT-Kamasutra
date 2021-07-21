import React, {ChangeEvent, RefObject, useState} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {v1} from "uuid";
import state, {ProfileType} from "../../../Redux/state";
import {rerenderEntireTree} from "../../../render";


type MyPostsType = {
    postData: ProfileType;
    addPost: ()=>void;
    newPostText: string
    updateNewPostText:(newText:string) =>void
}

const MyPosts = (props: MyPostsType) => {
    const [posts, setPosts] = useState<ProfileType>(props.postData)

    // let addPost = (title: string) => {
    //     const newPost = {id: v1(), message: title, likesCount: 0}
    //     setPosts([newPost, ...posts])
    // }
    //
    // const [title, setTitle] = useState("")
    //
    // const addTitle = () => {
    //     addPost(title)
    //     setTitle("")
    // }

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
        props.addPost()
    }
const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewPostText(e.currentTarget.value)
}
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