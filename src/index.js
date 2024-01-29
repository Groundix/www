import './index.css';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


reportWebVitals();  
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App  />
            </Provider>
        </React.StrictMode>
    );

