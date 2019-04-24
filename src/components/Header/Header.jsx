import React from 'react';
import styles from  './Header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <a className={styles.logo}>
            <img src="http://promopost.net/img/Content-UI-img-icons-png-cs.png"></img>
            </a>
        </header>
    );
}

export default Header;
