// @ts-ignore
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import React, {LegacyRef, useRef} from "react";
import {addPostActionCreator, updateNewPostTestActionCreator} from "../../../redux/store";
import {TPropsModel} from "../../../App";


const MyPosts = (props : TPropsModel) => {
    const {state, dispatch} = props
    let newPostElement = useRef<HTMLInputElement>(null)
    const handleAddPost = () => {
        dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value
        dispatch(updateNewPostTestActionCreator(text))
    }
    return (
        <div className={styles.wrapper}>
            {/*@ts-ignore*/}
            <textarea ref={newPostElement}
                      onChange={onPostChange}
                      value={state.profilePage.newPostText}/>
            <button onClick={handleAddPost}>Add post</button>
            {state.profilePage.posts.map((post) => {
                return <Post postNumber={post.id} text={post.text}/>
            })}
        </div>
    )
}
export default MyPosts