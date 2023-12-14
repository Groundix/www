import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {
    if (!props.dialogsData || !props.messageData) {
        return <div>No dialogs available</div>;
    }

    let dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} img={d.img} />);
    let messageElements = props.messageData.map((m) => <Message message={m.message} />);

    return (
        <div className={styles.chatContainer}>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={styles.chatBox}>
                <div className={styles.chat}>
                    {messageElements}
                </div>
                <div className={styles.footerChat}>
                    <textarea
                        className={styles.writeMessage}
                        name="Что нового?"
                        placeholder="Напиши что-нибудь..."
                        cols="30"
                        rows="10"
                        onChange={(e) => props.onMessageChange(e.target.value)}
                        value={props.newMessageText}
                    />
                    <button className={styles.sendButton} onClick={props.sendMessage}>
                        <i aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.85046 13.4005C5.74589 13.4005 4.85046 12.5051 4.85046 11.4005V3.40051H2.85046V11.4005C2.85046 13.6097 4.64132 15.4005 6.85046 15.4005H17.156L13.3714 19.1852L14.7856 20.5994L21.1495 14.2354L14.7856 7.87146L13.3714 9.28567L17.4862 13.4005H6.85046Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </i>
                    </button>
                </div>
            </div>
        </div>
    );
}



export default Dialogs;
