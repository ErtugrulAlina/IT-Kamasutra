import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";


const Profile: React.FC<ProfileContainerPropsType> = () => {
debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile