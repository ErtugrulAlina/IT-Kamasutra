import {v1} from "uuid";

export type ActionDialogsType = ReturnType<typeof UpdateNewMessagesBodyActionCreator>|ReturnType<typeof AddNewMessagesActionCreator>

export type DialogPageType = { dialogs: DialogsType, messages: MessagesType, newMessageBody: string }

export type DialogsType = Array<DialogsItemType>

export type DialogsItemType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = Array<MessagesItemType>

type MessagesItemType = {
    id: string
    content: string
}

let initialState:DialogPageType= {
    dialogs: [
        {
            id: v1(),
            avatar: "https://st3.depositphotos.com/2419757/15549/v/600/depositphotos_155499896-stock-illustration-young-woman-private-avatar-icon.jpg",
            name: "Alina"
        },
        {
            id: v1(),
            avatar: "https://i.pinimg.com/236x/f7/89/9b/f7899b86fe87da279c6f3b1ccebb4244.jpg",
            name: "Erkan"
        },
        {
            id: v1(),
            avatar: "https://thumbs.dreamstime.com/b/%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA-%D0%BA%D1%83%D1%80%D1%87%D0%B0%D0%B2%D1%8B%D0%BC-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%BA-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B8-%D1%81-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B5%D0%B9-hairstile-curlu-200319321.jpg",
            name: "Vedat"
        },
        {
            id: v1(),
            avatar: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d2cdf40760693.578c9a46bcad6.gif",
            name: "Vova"
        },
        {
            id: v1(),
            avatar: "https://i.pinimg.com/236x/fe/c1/63/fec1635aef8655a3d874cf5c0d4d344a.jpg",
            name: "Luda"
        },
        {
            id: v1(),
            avatar: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d2cdf40760693.578c9a46bcad6.gif",
            name: "Alex"
        },
    ],
    messages: [
        {id: v1(), content: "Hi!"},
        {id: v1(), content: "How are you?"},
        {id: v1(), content: "How is going?"},
        {id: v1(), content: "What are you doing?"},
        {id: v1(), content: "I am fine!"},
        {id: v1(), content: "What about you?"},
    ],
    newMessageBody: ""
}

const UPDATE_NEW_MESSAGES_BODY = "UPDATE-NEW-MESSAGES-BODY";
const ADD_NEW_MESSAGES = "ADD-NEW-MESSAGES";

const dialogReducer = (state:DialogPageType = initialState, action: ActionDialogsType):DialogPageType=>{
    switch (action.type){
        case UPDATE_NEW_MESSAGES_BODY:
            return {...state, newMessageBody:action.newBody};
        case ADD_NEW_MESSAGES:
            const body = state.newMessageBody
            const newMessage = {id: v1(), content: body}
            return {...state, messages:[...state.messages, newMessage], newMessageBody: ""};
        default:return state
    }
}
export default dialogReducer

export const UpdateNewMessagesBodyActionCreator = (text: string) =>
    ({type:  UPDATE_NEW_MESSAGES_BODY, newBody: text} as const)

export const AddNewMessagesActionCreator = () =>
    ({type:  ADD_NEW_MESSAGES} as const)
