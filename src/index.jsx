import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store/store';
import app from './firebase';

ReactDOM.render(
  <Provider store={store} app={app}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
