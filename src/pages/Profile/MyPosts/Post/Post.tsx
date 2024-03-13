// @ts-ignore
import styles from './Post.module.css'
import {TPostProps} from "./types";
const Post = (props : TPostProps) => {
    const { postNumber, text } = props
    return (
        <div className={styles.item}>
            <img
                src={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9198ce95636919.5f60f2dda90ca.jpg'}
                alt={'avatar'}
                defaultValue={'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg'}/>
            <div className={styles.content}>
                <span>post {postNumber}</span>
                <p>{text}</p>
            </div>
            <div className={styles.buttons}>
                <button>like</button>
                <button>dislike</button>
            </div>
        </div>
    )
}
export default Post