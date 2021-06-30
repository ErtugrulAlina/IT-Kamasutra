import s from "./Dialogs.module.css";
import React from "react";

type MessagePropTypes = {
    content: string
}
export const Message = (props: MessagePropTypes) => {
    return (
        <div className={s.message}>{props.content}</div>
    )
}