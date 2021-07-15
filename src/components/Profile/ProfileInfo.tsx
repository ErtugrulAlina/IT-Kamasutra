import s from "./Profile.module.css";
import React from "react";


export const ProfileInfo = (props: any) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-fotografii.jpg" alt=""/>
            </div>
            <div className={s.item}>
                Ava+description
            </div>
        </div>

    )
}