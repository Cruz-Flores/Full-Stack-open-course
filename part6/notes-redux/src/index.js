import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App.js';

import noteReducer from './reducers/noteReducer.js';
import filterReducer from './reducers/filterReducer.js';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <div />,
  document.getElementById('root')
);
