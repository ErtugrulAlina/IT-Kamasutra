import React from 'react';
import axios from "axios";
import {UsersType} from "../../Redux/users-reducer";
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
