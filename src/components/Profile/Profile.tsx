import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props:any) => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-fotografii.jpg" alt=""/>
            </div>
            <div className={s.item}>
                Ava+description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile