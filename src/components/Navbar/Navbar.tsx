import React from "react";
// @ts-ignore
import styles from './Navbar.module.css'
import {NavLink, useLocation} from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    const getRoute = (route : string) : boolean => {
        return location.pathname.split('/').includes(route)
    }
    return (
        <nav className={styles.nav}>
            <NavLink to={'/profile'} className={getRoute('profile') ? `${styles.item} ${styles.active}` : styles.item}>Profile</NavLink>
            <NavLink to={'/dialogs'} className={getRoute ('dialogs') ? `${styles.item} ${styles.active}` : styles.item}>Dialogs</NavLink>
            <NavLink to={'/news'} className={getRoute('news') ? `${styles.item} ${styles.active}` : styles.item}>News</NavLink>
            <NavLink to={'/music'} className={getRoute('music') ? `${styles.item} ${styles.active}` : styles.item}>Music</NavLink>
            <NavLink to={'/settings'} className={getRoute('settings') ? `${styles.item} ${styles.active}` : styles.item}>Settings</NavLink>
        </nav>
    )
}

export default Navbar;