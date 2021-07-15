import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsItemType, DialogsType} from "../../../Redux/state";

// type DialogItemPropTypes = {
//     id : string
//     name: string
// }
export const DialogItem = (props: DialogsItemType) => {

    let path:string = "/dialogs/" + props.id
    return (

        <div className={s.dialog}>
            <img src={props.avatar}
                 alt=""/>
           <span><NavLink to={path}>{props.name}</NavLink></span>
        </div>
    )
}