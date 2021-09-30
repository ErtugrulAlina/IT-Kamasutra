import {v1} from "uuid";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const DELETE_POST = "DELETE-POST";
const SET_USERS_PROFILE = "SET-USERS-PROFILE"


export type ActionProfileType = AddPostType
    | UpdateNewPostTextType
    | DeletePostType
    | ReturnType<typeof setUsersProfile>

type AddPostType = {
    type: "ADD-POST"
}
type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type DeletePostType = {
    type: "DELETE-POST",
    id: string
}

export type ProfilePageType = {
    postData: ProfileType,
    newPostText: string
    propfile:null
}

export type ProfileType = Array<PostType>

export type PostType = {
    id: string
    message: string
    likesCount: number
}

let initialState: ProfilePageType= {
    postData: [
        {id: v1(), message: "Hello friends", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11}
    ],
    newPostText: "",
    propfile: null,
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, postData: [newPost, ...state.postData], newPostText: ""};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText:action.newText};
        case DELETE_POST:
            return {...state, postData: state.postData.filter((p) => p.id !== action.id) }
        case SET_USERS_PROFILE:
            return { ... state, propfile: action.profile}
        default:
            return state
    }
}
export default profileReducer


export const AddPostActionCreator = () => ({type: ADD_POST} as const)

export const UpdateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export const DeletePostActionCreator = (id: string):DeletePostType => ({type: DELETE_POST, id:id} as const)

export const setUsersProfile = (profile:any)=>({
    type: SET_USERS_PROFILE,
    profile,
} as const)