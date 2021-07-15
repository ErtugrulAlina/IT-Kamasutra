import s from "../Dialogs.module.css";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

type MessagePropTypes = {
    id:string
    content: string
}
export const Message = (props: MessagePropTypes) => {
    const path:string = "/dialogs/" + props.id
    return (
        <Route path={path} render={() => <div className={s.message}>{props.content}</div>}/>
    )
}