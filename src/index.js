import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './layouts/App';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import './assets/fontawesome-free-5.8.1-web/css/all.css';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App/>
    </Provider>
, document.querySelector('#root'));