import React, { useContext } from 'react'
import { context } from '../context/context';
import UserItem from './UserItem';
import styles from "./UserList.module.css";

function UserList() {
    const ctx = useContext(context);

    let userNum = [];

    ctx.data.forEach(item => {
        if (!userNum.find(item2 => item2 === item.userId)) {
            userNum.push(item.userId);
        }
    });

    console.log(userNum);

    return (
        <div className={styles["user-list"]}>
            {
                userNum.map(item => {
                    return (
                        <UserItem key={item} id={item} />
                    )
                })
            }
        </div>
    )
}

export default UserList
