import React, {useState} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import state, {DialogsType, MessagesType} from "../../Redux/state";
import {v1} from "uuid";


type DialogsPropsType = {
    state: { dialogs: DialogsType, messages: MessagesType }
}

export const Dialogs = (props: DialogsPropsType) => {
    const [messages, setMessages] = useState<MessagesType>(props.state.messages)
    let addMessage = (message: string) => {
        const newMessage = {id: v1(), content: message}
        setMessages([...messages, newMessage])
    }
    const [text, setText] = useState("")
    const addTitle = () => {
        addMessage(text)
        setText("")
    }

    const dialogsJSXElements = props.state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    const messagesJSXElements = messages.map((d) => <Message id={props.state.dialogs[0].id}
                                                                         content={d.content}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsJSXElements}
            </div>
            <div className={s.messages}>
                {messagesJSXElements}
                <textarea value={text} onChange={(e) => setText(e.currentTarget.value)}></textarea>
                <div>
                    <button onClick={addTitle}>Send</button>
                </div>
            </div>
        </div>
    )
}