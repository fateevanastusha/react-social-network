import {ADD_POSTS, UPDATE_NEW_POST} from "../constants/actionTypes";

const postsReducer = (state : any, action : {type : string, payload : any}) => {
    if (action.type === ADD_POSTS){
        let newPost = {
            id : state.posts.length + 1,
            text : state.newPostText
        }
        // @ts-ignore
        state.posts.push(newPost)
        state.newPostText = ''
    }
    if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.payload as string
    }
    return state
}

export default postsReducer