import React from "react";
import {
    ActionProfileType,
    AddPostActionCreator,
    DeletePostActionCreator, ProfileType,
    UpdateNewPostTextActionCreator
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "@reduxjs/toolkit";


// type MyPostsContainerType = {
//     store: StoreType
// }

// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState()
//                 const addPost = () => {
//                    store.dispatch(AddPostCreator())
//                 }
//                 const deletePost = (id:string) =>{
//                     store.dispatch(DeletePostActionCreator(id))
//                 }
//
//                 const changeTextArea = (text: string) => {
//                     // let action = UpdateNewPostTextCreator(text)
//                    store.dispatch(UpdateNewPostTextCreator(text))
//                 }
//                 return (
//                     <MyPosts deletePost={deletePost} updateNewPostText={changeTextArea} addpost={addPost} posts={state.profilePage.postData}
//                              post={state.profilePage.newPostText}/>
//                 )
//
//             }}
//         </StoreContext.Consumer>
//     )
// }
type MapStatePropsType = {
    posts: ProfileType;
    post: string
}
type MapDispatchPropsType = {
    deletePost: (text:string)=>void
    updateNewPostText: (text: string)=>void
    addpost: ()=>void
}
const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        posts: state.profilePage.postData,
        post: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        deletePost: (id: string) => {
            dispatch(DeletePostActionCreator(id))
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        addpost: () => {
            dispatch(AddPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer