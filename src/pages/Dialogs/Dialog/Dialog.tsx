import {TDialogProps} from "./types";
import {NavLink, useLocation} from "react-router-dom";
// @ts-ignore
import styles from './Dialog.module.css'

const Dialog = (props : TDialogProps) => {
    const location = useLocation();
    const {name, id } = props
    return (<NavLink to={`${id}`} className={location.pathname.split('/').includes(String(props.id)) ? `${styles.item} ${styles.active}`: styles.item}>
        {name}
    </NavLink>)
}

export default Dialog