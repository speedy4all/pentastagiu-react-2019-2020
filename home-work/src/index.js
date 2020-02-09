import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import AppStore from './AppStore';


ReactDOM.render(
    <AppStore>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppStore>, 
    document.getElementById('root')
);

registerServiceWorker();
