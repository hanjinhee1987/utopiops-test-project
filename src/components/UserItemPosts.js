import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../context/context';
import styles from "./UserItemPosts.module.css";
function UserItemPosts({ title, id }) {

    const ctx = useContext(context);

    const handleExpectedId = () => {
        ctx.handleExpectedId(id);
    }

    return (
        <Link onClick={handleExpectedId} className={styles["user-item-post"]} to={{
            pathname: "/edit-item",
            id: id
        }}>
            <p>{title}</p>
        </Link>
    )
}

export default UserItemPosts
