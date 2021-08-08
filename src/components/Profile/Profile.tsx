import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo";
import {ActionType, ProfileType} from "../../Redux/store";


type ProfilePropsType = {
    state: { postData: ProfileType, newPostText: string }
    dispatch:(action:ActionType)=>void
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts  postData={props.state.postData} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile