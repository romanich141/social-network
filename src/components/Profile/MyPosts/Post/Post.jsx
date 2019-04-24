import React from 'react';
import styles from './Posts.module.css';
const Post = (props) => {
    return (
        <div className={styles["my-post"]}>
            <img className={styles["my-post__logo"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" alt="logo"/>
            <p className={styles['single-post']}>{props.message}</p>
        </div>
    );
}
export default Post;