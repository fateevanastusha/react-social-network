import {ADD_POSTS, UPDATE_NEW_POST} from "../constants/actionTypes";
import {TActionModel, TPostsPageModel} from "../types/storeModel";

const postsReducer = (state : TPostsPageModel, action : TActionModel) : TPostsPageModel => {
    switch (action.type) {
        case ADD_POSTS :
            let newPost = {
                id : state.posts.length + 1,
                text : state.newPostText
            }
            // @ts-ignore
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST :
            state.newPostText = action.payload as string
            return state
        default :
            return state
    }
}

export default postsReducer