import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import AppStore from './AppStore';


ReactDOM.render(
    <AppStore>
        <App />
    </AppStore>, 
    document.getElementById('root')
);

registerServiceWorker();
