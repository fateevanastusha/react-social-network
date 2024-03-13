// @ts-ignore
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTestActionCreator} from "../../../redux/store";


const MyPosts = (props : {state : object, dispatch : any}) => {
    const {state, dispatch} = props

    let newPostElement = React.createRef()
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
            {/*// @ts-ignore*/}
            <textarea ref={newPostElement}
                      onChange={onPostChange}
                      // @ts-ignore
                      value={state.profilePage.newPostText}/>
            <button onClick={handleAddPost}>Add post</button>
            {/*// @ts-ignore*/}
            {state.profilePage.posts.map((post) => {
                return <Post postNumber={post.id} text={post.text}/>
            })}
        </div>
    )
}
export default MyPosts