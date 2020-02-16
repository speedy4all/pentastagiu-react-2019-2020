import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import AppStore from "./components/appstore";

ReactDOM.render(
    <AppStore>
        <App/>
    </AppStore>
    , document.getElementById('root'));