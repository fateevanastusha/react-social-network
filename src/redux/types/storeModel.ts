import {TPostModel} from "./postsModel";
import {TChatModel} from "./dialogsModel";

export type TDialogsPageModel = {
    newMessage : string,
    chats : TChatModel[]
}

export type TPostsPageModel = {
    newPostText : string,
    posts : TPostModel[]
}

export type TStateModel = {
    profilePage : TPostsPageModel,
    dialogsPage : TDialogsPageModel
}

export type TActionModel = {
    type : string
    payload?: any
}

export type TStoreModel = {
    _state : TStateModel
    getState : () => TStateModel
    dispatch : (action : TActionModel) => void
    _callSubscriber : (state : TStateModel) => void
    subscribe : (state: (state: TStateModel) => void) => void
}

