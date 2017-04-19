import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import store from './store/store';
import router from './router/router';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);