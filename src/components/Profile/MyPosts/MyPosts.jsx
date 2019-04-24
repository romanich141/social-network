import React from 'react';
import styles from './MyPosts.module.css';
const MyPosts = () => {
    return (
         <div className={styles["my-posts"]}>
            <img className={styles["my-posts__logo"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" alt="logo"/>
            <textarea className={styles["my-posts__message"]}></textarea>
            <div className={styles["my-post__buttons"]}>
                <button className={styles["button-add"]}>add post</button>
                <button className={styles["button-del"]}>delete post</button>
            </div>
        </div>
    );
}
export default MyPosts;