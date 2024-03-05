import React from "react";
// @ts-ignore
import styles from './Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={'https://images.vexels.com/media/users/3/272593/isolated/preview/2c91055c5e95c3e07ead4d39c0a2b2e8-minimalist-flower-icon.png'}
                alt={'header'}/>
        </header>
    )
}

export default Header