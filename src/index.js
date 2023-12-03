import './index.css';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


reportWebVitals();  

let rerenderEntireTree = (state) => {
   
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App appState={state} dispatch={store.dispatch.bind(store) } />
            </Provider>
        </React.StrictMode>
    );
}

//sendMessage={store.sendMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}


rerenderEntireTree(store.getState());

store.subscribe(() =>{
    let state = store.getState()
    rerenderEntireTree(state);
});