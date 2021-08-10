import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ActionType, stateType, StoreType} from "./Redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: stateType
    dispatch: (action: ActionType) => void
    store: StoreType
}

function App() {
debugger
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"wrapper-content"}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                    <Route path={'/profile'}
                           render={() => <Profile />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;

