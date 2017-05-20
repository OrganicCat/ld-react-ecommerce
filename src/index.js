import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ldCartApp from './reducers'
import App from './App';
import './index.css';

let store = createStore(ldCartApp)

store.dispatch({
  type: 'ADD_PETS',
  description: 'So many pets'
})

store.dispatch({
  type: 'ADD_PETS',
  description: 'So many pets 2'
})


console.log("store", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
