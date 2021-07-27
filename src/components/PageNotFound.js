import React from 'react'
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    return (
        <div className={styles["page-not-found"]}>
            <h1>404</h1>
            <p>Page Not Found !</p>
        </div>
    )
}

export default PageNotFound
