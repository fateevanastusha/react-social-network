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
        },
        dialogsPage : {
            chats : [
                {"name": "Alice", "id": 1, messages : [
                        {"message": "Hello", "id": 1, "side": "left"},
                        {"message": "Hi there!", "id": 2, "side": "right"},
                        {"message": "How are you?", "id": 3, "side": "left"},
                        {"message": "I'm good, thanks!", "id": 4, "side": "right"},
                        {"message": "What's new?", "id": 5, "side": "left"},
                        {"message": "Not much, just working", "id": 6, "side": "right"},
                        {"message": "Any plans for the weekend?", "id": 7, "side": "left"},
                        {"message": "Thinking of a movie night", "id": 8, "side": "right"},
                        {"message": "Sounds fun!", "id": 9, "side": "left"},
                        {"message": "Yeah, I'm looking forward to it", "id": 10, "side": "right"}
                    ]},
                {"name": "Bob", "id": 2, messages: []},
                {"name": "Charlie", "id": 3, messages: []},
                {"name": "David", "id": 4, messages: []},
                {"name": "Eva", "id": 5, messages: []},
                {"name": "Frank", "id": 6, messages: []},
                {"name": "Grace", "id": 7, messages: []},
                {"name": "Henry", "id": 8, messages: []},
                {"name": "Ivy", "id": 9, messages: []},
                {"name": "Jack", "id": 10, messages: []},
                {"name": "Karen", "id": 11, messages: []},
                {"name": "Leo", "id": 12, messages: []},
                {"name": "Mia", "id": 13, messages: []},
                {"name": "Nathan", "id": 14, messages: []},
                {"name": "Olivia", "id": 15, messages: []},

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