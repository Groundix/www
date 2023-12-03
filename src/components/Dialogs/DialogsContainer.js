import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { onMessageChangeActionCreator,sendMessageActionCreator } from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    const dispatch = useDispatch();
    const dialogsData = useSelector(state => state.dialogsPage.dialogsData);
    const messageData = useSelector(state => state.dialogsPage.messageData);
    const newMessageText = useSelector(state => state.dialogsPage.newMessageText);

    const sendMessage = () => {
        dispatch(sendMessageActionCreator());
    }

    const onMessageChange = (text) => {
        dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <Dialogs
            dialogsData={dialogsData}
            messageData={messageData}
            newMessageText={newMessageText}
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
        />
    );
};

export default DialogsContainer;
