// @ts-ignore
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {useLocation, useParams} from "react-router-dom";

type TMessage = {
    message : string
    id : number
    side : 'left' | 'right'
}

const Dialogs = ( props : {state : object, dispatch : any}) => {
    const {state, dispatch} = props
    const location = useLocation();
    const id = location.pathname.split('/')[location.pathname.split('/').length - 1]
    return (
        <div className={styles.content}>
            <div className={styles.list}>
                {/*@ts-ignore*/}
                {state.dialogsPage.chats.map((dialog => {
                    return <Dialog name={dialog.name} id={dialog.id}/>
                }))}
            </div>
            <div className={styles.dialogs}>
                {/*@ts-ignore*/}
                {state.dialogsPage.chats.find((chat) => chat.id == id)?.messages.map((message) => {
                    return <Message text={message.message} id={message.id} side={message.side}/>
                })}
            </div>
        </div>
    )
}
export default Dialogs