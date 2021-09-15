import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/dialogs-reducer";




type DialogsPropsType = {
    dialogPage: DialogPageType
    onAddMessageClick:()=>void
    onMessageBodyChange:(body:string)=>void
}

export const Dialogs = (props: DialogsPropsType) => {
debugger
    const text = props.dialogPage.newMessageBody
    const onMessageBodyChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       const body = e.target.value;
       props.onMessageBodyChange(body)

    };
    const onAddMessageClick = () => {
       props.onAddMessageClick()
    }

    const dialogsJSXElements = props.dialogPage.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                                     avatar={d.avatar}/>)
    const messagesJSXElements = props.dialogPage.messages.map((d) => <Message
        key={d.id} id={props.dialogPage.dialogs[0].id}
        content={d.content}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsJSXElements}
            </div>
            <div className={s.messages}>
                {messagesJSXElements}
                <div>
                    <textarea value={text} onChange={onMessageBodyChange}></textarea>
                </div>
                <div>
                    <button onClick={onAddMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}