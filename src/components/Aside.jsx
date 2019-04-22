import React from 'react';

const Aside = () => {
    return (
        <aside className="aside">
            <ul className="navbar-list">
            <li className="navbar-list__item"><a href="#">Profile</a></li>
            <li className="navbar-list__item"><a href="#">Messages</a></li>
            <li className="navbar-list__item"><a href="#">News</a></li>
            <li className="navbar-list__item"><a href="#">Music</a></li>
            <li className="navbar-list__item"><a href="#">Settings</a></li>
            </ul>
        </aside>
    );
}

export default Aside;