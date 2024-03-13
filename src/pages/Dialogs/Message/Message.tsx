// @ts-ignore
import styles from "./Message.module.css"
import {TMessageProps} from "./types";

const Message = (props : TMessageProps) => {
    const {text, side, id} = props
    return (<div className={`${styles.message} ${side === 'left' ? styles.left : styles.right}`}>{text}</div>)
}

export default Message