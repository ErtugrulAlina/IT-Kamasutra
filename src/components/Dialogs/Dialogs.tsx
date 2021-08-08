import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    stateType,
} from "../../Redux/store";
import {AddNewMessagesCreator, UpdateNewMessagesBodyCreator} from "../../Redux/dialogs-reducer";



type DialogsPropsType = {
    state: stateType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const text = props.state.dialogPage.newMessageBody
    const onMessageBodyChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       const body = e.target.value;
       props.dispatch(UpdateNewMessagesBodyCreator(body))
    };
    const onAddMessageClick = () => {
        props.dispatch(AddNewMessagesCreator())
    }

    const dialogsJSXElements = props.state.dialogPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name}
                                                                                     avatar={d.avatar}/>)
    const messagesJSXElements = props.state.dialogPage.messages.map((d) => <Message
        id={props.state.dialogPage.dialogs[0].id}
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