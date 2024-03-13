import React from "react";
// @ts-ignore
import styles from './Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={'https://artmot.ru/wp-content/uploads/2021/08/cropped-artmot.png'}
                alt={'header'}/>
            <h1>CLUP CLUP</h1>
        </header>
    )
}

export default Header