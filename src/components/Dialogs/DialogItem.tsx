import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropTypes = {
    id:number
    name: string
}
export const DialogItem = (props: DialogItemPropTypes) => {

    let path:string = "/dialogs/" + props.id
    return (

        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}