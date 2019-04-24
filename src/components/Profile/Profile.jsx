import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
const Profile = () => {
    return (
        <main className={styles.main}>
            <div className={styles.bg}></div>
            <h1>Main Content</h1>
            <MyPosts />
            <h2>My Posts</h2>
            <Post message="Hello guys"/>
            <Post message="All people hello"/>
            <Post />
        </main>
    );
}
export default Profile;