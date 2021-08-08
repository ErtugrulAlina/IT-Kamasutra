import {combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import {stateType, StoreType} from "./store";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
})

let store:StoreType = createStore(reducers)

export default store