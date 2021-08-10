import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {ActionType, ProfileType, stateType, StoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: StoreType
}

const Profile = () => {
debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile