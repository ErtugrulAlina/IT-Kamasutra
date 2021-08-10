import React from 'react';
import {ActionType, StoreType} from "../../Redux/store";
import {AddNewMessagesCreator, UpdateNewMessagesBodyCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from '../../StoreContext';

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const onMessageBodyChange = (body: string) => {
                        store.dispatch(UpdateNewMessagesBodyCreator(body))
                    };
                    const onAddMessageClick = () => {
                       store.dispatch(AddNewMessagesCreator())
                    }
                    return (
                        <Dialogs dialogPage={state.dialogPage} onAddMessageClick={onAddMessageClick}
                                 onMessageBodyChange={onMessageBodyChange}/>
                    )

                }}
        </StoreContext.Consumer>
    )
}