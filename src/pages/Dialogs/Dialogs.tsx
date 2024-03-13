// @ts-ignore
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {useLocation} from "react-router-dom";
import {useRef} from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/store";
import {TPropsModel} from "../../App";

const Dialogs = ( props : TPropsModel) => {
    const {state, dispatch} = props
    const location = useLocation();
    const id = Number(location.pathname.split('/')[location.pathname.split('/').length - 1])
    const newMessageRef = useRef()
    const onMessageChange =  () => {
        // @ts-ignore
        let message = newMessageRef?.current.value
        dispatch(updateNewMessageActionCreator(message))
    }
    const handleAddMessage = () => {
        dispatch(addMessageActionCreator(id))
    }
    return (
        <div className={styles.content}>
            <div className={styles.list}>
                {state.dialogsPage.chats.map((dialog => {
                    return <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>
                }))}
            </div>
            <div className={styles.dialogs}>
                {state.dialogsPage.chats.find((chat) => chat.id == id)?.messages.map((message) => {
                    return <Message text={message.message} id={message.id} side={message.side} key={message.id}/>
                })}
                {/*@ts-ignore*/}
                <textarea ref={newMessageRef} onChange={onMessageChange} value={state.dialogsPage.newMessage}/>
                <button onClick={handleAddMessage}>Send message</button>
            </div>
        </div>
    )
}
export default Dialogs