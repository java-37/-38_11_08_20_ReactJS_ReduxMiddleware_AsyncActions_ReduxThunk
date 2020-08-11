import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './store/rootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

function logger(store){
  return function(dispatch){
    return function(action){
      console.log(store.getState());
      return dispatch(action);
    }
  }
}

// const store = createStore(rootReducer,applyMiddleware(logger,thunk));
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

