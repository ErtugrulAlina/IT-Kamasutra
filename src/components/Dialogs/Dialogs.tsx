import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
               <DialogItem id={1} name={"Alina"}/>
               <DialogItem id={2} name={"Erkan"}/>
               <DialogItem id={3} name={"Vedat"}/>
               <DialogItem id={4} name={"Vova"}/>
               <DialogItem id={5} name={"Luda"}/>
               <DialogItem id={6} name={"Alex"}/>
            </div>
            <div className={s.messages}>
                <Message content={"Hi"}/>
                <Message content={"How are you?"}/>
                <Message content={"How is going?"}/>
                <Message content={"What are you doing?"}/>

            </div>
        </div>
    )
}