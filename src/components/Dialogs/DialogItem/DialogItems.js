import React from "react"
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={styles.thread}>

        <div className={styles.pic}>
            <img src={props.img} />
        </div>
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}> <div className={styles.name}>{props.name}</div> </NavLink>
        </div>
        <div className={styles.time}>12:50</div>
        <div className={styles.actions}></div>

    </div>


}
export default DialogItem;

