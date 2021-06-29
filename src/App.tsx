import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import {Dialogs} from "./components/Dialogs/Dialogs";


function App() {
    return (

        <div className={"wrapper"}>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}

            <div className ={"wrapper-content"}>
                <Dialogs/>
            </div>

        </div>
    );
}

export default App;

