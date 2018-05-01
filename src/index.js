import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/routes';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
