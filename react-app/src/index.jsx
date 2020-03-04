import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppStore from './AppStore';
import {MuiThemeProvider} from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ToysList from './components/ToysList';
import theme from './theme';



ReactDOM.render(
    <MuiThemeProvider theme = {theme}>
        <AppStore> 
    <App />
        </AppStore>
    </MuiThemeProvider>, 
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
