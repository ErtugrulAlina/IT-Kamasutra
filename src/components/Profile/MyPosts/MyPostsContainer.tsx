import React, {ChangeEvent, RefObject, useState} from "react";
import Post from "./Post/Post";

import {ActionType, ProfileType, stateType, StoreType} from "../../../Redux/store";
import {AddPostCreator, UpdateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                const addPost = () => {
                   store.dispatch(AddPostCreator())
                }

                const changeTextArea = (text: string) => {
                    let action = UpdateNewPostTextCreator(text)
                   store.dispatch(action)
                }
                return (
                    <MyPosts updateNewPostText={changeTextArea} addpost={addPost} posts={state.profilePage.postData}
                             post={state.profilePage.newPostText}/>
                )

            }}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer