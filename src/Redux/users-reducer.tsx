import {v1} from "uuid";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"


export type ActionUsersType = FollowACType | UnfollowACType | UsersACType | SetCurrentPageACType | setTotalUsersCountACType

type FollowACType = {
    type: "FOLLOW",
    userId: string
}
type UnfollowACType = {
    type: "UNFOLLOW",
    userId: string
}
type UsersACType = {
    type: "SET-USERS",
     users: UsersType[],
}
type SetCurrentPageACType = {
    type: "SET-CURRENT-PAGE"
    pageNumber: number
}
type setTotalUsersCountACType = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}

export type UsersPageType = {
    users: UsersType[],
    totalUsersCount: number
    pageSize:number
    currentPage: number
}

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    photos: {small: string , large: string}
    followed: boolean
    name: string
    status: string
    location: LocationType
}

let initialState: UsersPageType = {
    users: [],
    totalUsersCount: 1,
    pageSize:50,
    currentPage: 1
}

const usersReducer = (state: UsersPageType = initialState, action: ActionUsersType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users:state.users.map(u=> u.id===action.userId?{...u, followed:true}:u)}
        case UNFOLLOW:
            return {...state, users:state.users.map(u=> u.id===action.userId?{...u, followed:false}:u)}
        case SET_USERS:
            debugger
            return {...state, users:[...action.users] }
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.pageNumber}
        case SET_TOTAL_USERS_COUNT:
            debugger
            return {...state, totalUsersCount:action.totalCount}
        default:
            return state
    }
}
export default usersReducer

export const FollowAC = (userId: string): FollowACType =>
    ({type: FOLLOW, userId: userId} as const)

export const UnfollowAC = (userId: string): UnfollowACType =>
    ({type: UNFOLLOW, userId: userId} as const)

export const SetUsersAC = (users: UsersType[]): UsersACType =>
    ({type: SET_USERS, users: users} as const)
export const SetCurrentPageAC = (pageNumber:number): SetCurrentPageACType =>
    ({type: SET_CURRENT_PAGE, pageNumber} as const)
export const setTotalUsersCountAC = (totalCount:number): setTotalUsersCountACType =>
    ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)