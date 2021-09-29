import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setUsers,
    setPageNumber,
    setTotalUsersCount,
    toggleFetching,
    UsersType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setPageNumber: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends  React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(respons =>
        {
            this.props.toggleFetching(false);
            this.props.setUsers(respons.data.items);
            this.props.setTotalUsersCount(respons.data.totalCount);
        })
    }

    onPageChanged = (p: number):void => {
        this.props.toggleFetching(true);
        this.props.setPageNumber(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(respons => {
            this.props.toggleFetching(false);
            this.props.setUsers(respons.data.items);
        })
    }

    render() {
        return<>
            {this.props.isFetching?  <Preloader/>: null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalUsersCount={this.props.totalUsersCount}
            />
        </>

    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps,  {
    follow,
    unFollow,
    setUsers,
    setPageNumber,
    setTotalUsersCount,
    toggleFetching
})(UsersAPIComponent)
