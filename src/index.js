import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import { rootReducer } from './components/reducers/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const enhancer = compose(applyMiddleware(thunk),persistState(null,"symbolData"),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

const store = createStore(rootReducer,enhancer);

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
