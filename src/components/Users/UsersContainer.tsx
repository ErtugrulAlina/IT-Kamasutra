import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";

import {
    FollowAC,
    SetCurrentPageAC,
    setTotalUsersCountAC,
    SetUsersAC,
    UnfollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {Users} from "./Users";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setPageNumber: (pageNumber: number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

class UsersAPIComponent extends  React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.setTotalUsersCount(respons.data.totalCount);
        })
    }

    onPageChanged = (p: number):void => {
        this.props.setPageNumber(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
        })
    }

    render() {
        return <Users
            users={this.props.users}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        totalUsersCount={this.props.totalUsersCount}
        />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(UnfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(SetUsersAC(users))
        },
        setPageNumber: (pageNumber: number) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
