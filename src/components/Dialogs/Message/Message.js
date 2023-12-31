import React from "react"
import styles from "./../Dialogs.module.css";



const Message = (props) => {
    return <div className={styles.messages}>
        <div className={styles.message}>{props.message}</div>
    </div>
}



export default Message;