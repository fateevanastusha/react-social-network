import React from "react";
// @ts-ignore
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props : {state : object, dispatch : any}) => {
    const {state, dispatch} = props
    return (
        <div className={styles.content}>
            <img
                src={'https://i.pinimg.com/originals/f2/60/fd/f260fd8c417acb15c98e5a60cf7a6b96.jpg'}
                alt={'header'}/>
            <div className={styles.profile}>
                <img src={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9198ce95636919.5f60f2dda90ca.jpg'}
                     alt={'avatar'}/>
                <div className={styles.description}>
                    <span>Nastya</span>
                    <p>Hello there! I'm a dynamic individual with a passion for embracing challenges and turning them
                        into opportunities. My diverse background and skill set make me a versatile and adaptable
                        professional, always ready to explore new horizons.</p>
                </div>

            </div>
            <div className={styles.title}>My posts</div>
            <div>New post</div>
            <MyPosts state={state} dispatch={dispatch}/>
        </div>
    )
}

export default Profile