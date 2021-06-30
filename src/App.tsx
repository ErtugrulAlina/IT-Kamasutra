import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import { Music } from './components/Music/Music';


function App() {
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"wrapper-content"}>
                    <Route  path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route  path={'/profile'} render={()=><Profile/>}/>
                    <Route  path={'/news'} render={()=><News/>}/>
                    <Route  path={'/music'} render={()=><Music/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;

