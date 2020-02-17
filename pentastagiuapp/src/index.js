import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import AppStore from "./components/appstore";
import {BrowserRouter , Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <AppStore>
        <Route path="/" component={App} />
    </AppStore>
    </BrowserRouter>
    , document.getElementById('root'));