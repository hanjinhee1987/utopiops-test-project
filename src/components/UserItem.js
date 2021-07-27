import React, { useContext, useEffect, useState } from 'react'
import { context } from '../context/context';
import UserItemPosts from './UserItemPosts';
import "./UserItem.css";
function UserItem({ id }) {
    const ctx = useContext(context);

    const [isPosts, setIsPosts] = useState(false);

    const posts = [];

    const clickHandler = () => {
        setIsPosts(!isPosts);
    }

    ctx.data.forEach(item => {
        if (item.userId === id) {
            posts.push(item);
        }
    });

    return (
        <div className="user-item">
            <p onClick={clickHandler}>User {id}</p>
            <div className={isPosts ? "user-item-div change" : "user-item-div"}>
                {
                    posts.map(item => {
                        return (
                            <UserItemPosts key={item.id} title={item.title} id={item.id} />
                        )
                    })
                }
            </div>
        </div >
    )
}

export default UserItem
