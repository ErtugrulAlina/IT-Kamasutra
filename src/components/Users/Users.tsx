import React from 'react';
import styles from "./user.module.css";
import userPhoto from "../../esets/image/868320_people_512x512.png";
import {UsersType} from "../../Redux/users-reducer";

type UsersPropsType = {

    users: UsersType[]
    pageSize: number
    onPageChanged: (p:number)=>void
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

export const Users = (props:UsersPropsType)=> {

    let pagesCount =Math.ceil(props.totalUsersCount/props.pageSize)
    let pages = [];
        for(let i = 1; i<=pagesCount; i++){
            pages.push(i)
        }
debugger
    return( <div>
        <div>
            {pages.map(p=> <span onClick={()=>props.onPageChanged(p)} className={p===props.currentPage?styles.selected:undefined}>{p}</span>)}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unFollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)}
    </div>)

}

