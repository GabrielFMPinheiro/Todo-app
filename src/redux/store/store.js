import { createStore, combineReducers } from 'redux';
import controlTheme from '../reducers/theme';
import todo from '../reducers/todo';

const rootReducer = combineReducers({ controlTheme, todo });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
