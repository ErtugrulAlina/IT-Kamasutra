import React, {ChangeEvent, RefObject, useState, KeyboardEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfileType} from "../../../Redux/profile-reducer";



type MyPostsType = {
    updateNewPostText: (text: string) => void;
    addpost: () => void;
    posts: ProfileType;
    post: string;
    deletePost:(id:string) => void;
}


const MyPosts = (props: MyPostsType) => {
    // const [posts, setPosts] = useState<ProfileType>(props.posts)

    // const deletePost = (id: string) => {
    //     const newPosts = posts.filter((p) => p.id !== id)
    //     setPosts(newPosts)
    // }
    const messagesJSXElements = props.posts.map((d) => <Post id={d.id}
                                                       message={d.message}
                                                       likesCount={d.likesCount}
                                                       deletePost={props.deletePost}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    const addPost = () => {
        props.addpost()
    }
    const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            addPost();
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.textarea}>
                <div>
                    <textarea onKeyPress={onKeyPressHandler} value={props.post} ref={newPostElement}
                              onChange={changeTextArea}//value={title} onChange={(e) => setTitle(e.currentTarget.value)} name=""
                              id=""/>
                </div>
                <div>
                    <button onClick={addPost} >Send</button>
                </div>
            </div>
            <div className={s.posts}>{messagesJSXElements}</div>
        </div>
    )
}
export default MyPosts