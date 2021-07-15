import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo";
import {MessagesDataType} from "../../Redux/state";


type ProfilePropsType = {
    state:{postData: MessagesDataType}
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postData={props.state.postData}/>
        </div>
    )
}
export default Profile