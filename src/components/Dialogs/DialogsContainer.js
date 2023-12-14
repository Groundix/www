import React from "react";
import { connect } from 'react-redux';
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

// Определение функций mapStateToProps и mapDispatchToProps
const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        },
    };
};

// Подключение компонента к Redux
const ConnectedDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ConnectedDialogsContainer;
