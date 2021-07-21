import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo";
import {ProfileType} from "../../Redux/state";


type ProfilePropsType = {
    state:{postData: ProfileType, newPostText:string}
    addPost: ()=>void
    updateNewPostText:(newText:string) =>void
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} postData={props.state.postData} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile