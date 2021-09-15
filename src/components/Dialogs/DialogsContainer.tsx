import React from 'react';
import {StoreType} from "../../Redux/store";
import {ActionDialogsType, AddNewMessagesActionCreator, UpdateNewMessagesBodyActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "@reduxjs/toolkit";

// type DialogsContainerPropsType = {
//     store: StoreType
// }

// export const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//
//                     const onMessageBodyChange = (body: string) => {
//                         store.dispatch(UpdateNewMessagesBodyCreator(body))
//                     };
//                     const onAddMessageClick = () => {
//                         store.dispatch(AddNewMessagesCreator())
//                     }
//                     return (
//                         <Dialogs dialogPage={state.dialogPage} onAddMessageClick={onAddMessageClick}
//                                  onMessageBodyChange={onMessageBodyChange}/>
//                     )
//
//                 }}
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state:AppStateType) => {
    return {dialogPage: state.dialogPage}
}
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onAddMessageClick: () => {
            dispatch(AddNewMessagesActionCreator())
        },
        onMessageBodyChange: (body:string) => {
            dispatch(UpdateNewMessagesBodyActionCreator(body))
        }
}
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)