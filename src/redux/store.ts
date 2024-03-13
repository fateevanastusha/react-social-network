import {ADD_POSTS, UPDATE_NEW_POST} from "./constants/actionTypes";

let store = {
    _state : {
        profilePage : {
            newPostText : "new post",
            posts : [
                {
                    "id": 1,
                    "text": "Привет, мир!"
                },
                {
                    "id": 2,
                    "text": "Это второй пост."
                },
                {
                    "id": 3,
                    "text": "Ещё один пост здесь."
                },
                {
                    "id": 4,
                    "text": "Четвёртый пост в этом массиве."
                },
                {
                    "id": 5,
                    "text": "Продолжаем создавать посты."
                },
                {
                    "id": 6,
                    "text": "Шестой пост на подходе."
                },
                {
                    "id": 7,
                    "text": "Седьмой пост здесь."
                },
                {
                    "id": 8,
                    "text": "Восьмой пост для разнообразия."
                },
                {
                    "id": 9,
                    "text": "Девятый пост в этом массиве."
                },
                {
                    "id": 10,
                    "text": "Десятый пост, и мы завершили!"
                }
            ]
        }
    },
    _callSubscriber (state : any)  {
        console.log('state changed')
    },
    subscribe (observer : any) {
        this._callSubscriber = observer
    },
    getState  () {
        return this._state
    },
    dispatch(action : {type : string, payload : any}){
        if (action.type === ADD_POSTS){
            let newPost = {
                id : this._state.profilePage.posts.length + 1,
                text : this._state.profilePage.newPostText
            }
            // @ts-ignore
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.payload as string
            this._callSubscriber(this._state)
        }
    }

}
export const addPostActionCreator = () => {
    return {
        type : ADD_POSTS
    }
}
export const updateNewPostTestActionCreator = (text : string) => {
    return { type : UPDATE_NEW_POST, payload : text}
}

export default store