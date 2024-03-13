import {ADD_MESSAGE, UPDATE_NEW_MESSAGE} from "../constants/actionTypes";
import {TActionModel, TDialogsPageModel} from "../types/storeModel";

const dialogsReducer = (state : TDialogsPageModel, action : TActionModel) : TDialogsPageModel => {
    switch (action.type) {
        case ADD_MESSAGE :
            state.chats
                .find((chat : any) => {return chat.id === action.payload})
                ?.messages.push( {"message": state.newMessage, "id": new Date().valueOf(), "side": "right"})
            state.newMessage = ""
            return state
        case UPDATE_NEW_MESSAGE :
            state.newMessage = action.payload as string
            return state
        default :
            return state
    }

}

export default dialogsReducer