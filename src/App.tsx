import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {stateType} from "./Redux/state";

type AppPropsType = {
    state:stateType
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"wrapper-content"}>
                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile state={props.state.profilePage} />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}
export default App;

