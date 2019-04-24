import React from 'react';
import styles from './Aside.module.css';
const Aside = () => {
    return (
        <aside className={styles.aside}>
            <ul className={styles["navbar-list"]}>
            <li className={styles["navbar-list__item"]}><a href="#">Profile</a></li>
            <li className={styles["navbar-list__item"]}><a href="#">Messages</a></li>
            <li className={styles["navbar-list__item"]}><a href="#">News</a></li>
            <li className={styles["navbar-list__item"]}><a href="#">Music</a></li>
            <li className={styles["navbar-list__item"]}><a href="#">Settings</a></li>
            </ul>
        </aside>
    );
}

export default Aside;