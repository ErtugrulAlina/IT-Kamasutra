import {combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage:usersReducer
})


const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

export default store