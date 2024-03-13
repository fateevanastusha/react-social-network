import {ADD_MESSAGE, UPDATE_NEW_MESSAGE} from "../constants/actionTypes";

const messagesReducer = (state : any, action : {type : string, payload : any}) => {
    if (action.type === ADD_MESSAGE) {
        state.chats
            .find((chat : any) => {return chat.id === action.payload})
            ?.messages.push( {"message": state.newMessage, "id": new Date().valueOf(), "side": "right"})
        state.newMessage = ""
    }
    if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessage = action.payload as string
    }
    return state
}

export default messagesReducer