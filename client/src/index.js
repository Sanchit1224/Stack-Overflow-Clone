import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit'
import {legacy_createStore as createStore, applyMiddleware, compose}  from 'redux'
import thunk from 'redux-thunk'
import KommunicateChat from './components/Chatbot/chatbot'
import Reducers from './reducers';

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <KommunicateChat/>
    <App />
  </React.StrictMode>
  </Provider>
);
