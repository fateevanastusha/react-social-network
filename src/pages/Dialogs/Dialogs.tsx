// @ts-ignore
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

type TMessage = {
    message : string
    id : number
    side : 'left' | 'right'
}

const Dialogs = () => {
    let dialogsData =  [
        {"name": "Alice", "id": 1},
        {"name": "Bob", "id": 2},
        {"name": "Charlie", "id": 3},
        {"name": "David", "id": 4},
        {"name": "Eva", "id": 5},
        {"name": "Frank", "id": 6},
        {"name": "Grace", "id": 7},
        {"name": "Henry", "id": 8},
        {"name": "Ivy", "id": 9},
        {"name": "Jack", "id": 10},
        {"name": "Karen", "id": 11},
        {"name": "Leo", "id": 12},
        {"name": "Mia", "id": 13},
        {"name": "Nathan", "id": 14},
        {"name": "Olivia", "id": 15}
    ]
    let messagesData : TMessage[] = [
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
    ]
    return (
        <div className={styles.content}>
            <div className={styles.list}>
                {dialogsData.map((dialog => {
                    return <Dialog name={dialog.name} id={dialog.id}/>
                }))}
            </div>
            <div className={styles.dialogs}>
                {messagesData.map((message) => {
                    return <Message text={message.message} id={message.id} side={message.side}/>
                })}
            </div>
        </div>
    )
}
export default Dialogs