import {v1} from "uuid";
import {ActionType, PorfilePageType, PostType} from "./store";

let initialState = {
    postData: [
        {id: v1(), message: "Hello friends", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11}
    ],
    newPostText: ""}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const AddPostCreator = () =>({type: ADD_POST} as const)

export const UpdateNewPostTextCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

const profileReducer = (state: PorfilePageType=initialState, action: ActionType):PorfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:return state
    }
}
export default profileReducer