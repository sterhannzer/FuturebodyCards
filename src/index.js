import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import registerServiceWorker from 'registerServiceWorker';
import { configureFakeBackend } from 'helpers/fakeBackend/rootBackend';
import {configureStore} from 'store/createStore';
import {Provider} from 'react-redux';

const store = configureStore();

configureFakeBackend();

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
