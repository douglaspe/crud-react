import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import App from './main/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,document.getElementById('root'));

serviceWorker.unregister();
