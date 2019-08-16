import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'axios-progress-bar/dist/nprogress.css';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleWare(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
