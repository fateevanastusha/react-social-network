import React from "react";
// @ts-ignore
import styles from './Profile.module.css'
const Profile = () => {
    return (
        <div className={styles.content}>
            <img
                src={'https://camo.githubusercontent.com/207d1b81e905f24852f7d86878220c80d116963df0c15d60afd88cbd5a4a6720/68747470733a2f2f6e797473656e73652e636f6d2f50494354555245532f436c6f756473322e706e67'}
                alt={'header'}/>
            <div>
                avatar + description
            </div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
}

export default Profile