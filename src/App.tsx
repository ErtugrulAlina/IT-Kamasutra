import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {addPost, stateType, updateNewPostText} from "./Redux/state";

type AppPropsType = {
    state:stateType
    addPost: ()=>void
    updateNewPostText: (newText: string) => void
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"wrapper-content"}>
                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile addPost={props.addPost} state={props.state.profilePage} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}
export default App;

