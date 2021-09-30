import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {setUsersProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

export type ProfileContainerPropsType = {
    a:number
    setUsersProfile : (profile:any)=>void
}

class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(respons =>{
            this.props.setUsersProfile(respons.data);
        })
    }

    render(){
        return (
            <Profile {...this.props}/>
        )
    }

}
let mapStateToProps=(state:AppStateType)=>({
a:13
})

export default  connect(mapStateToProps, {setUsersProfile})(ProfileContainer);