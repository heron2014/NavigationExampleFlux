import { combineReducers } from 'redux';
import nav from './modules/nav';
import pages from './modules/pages';
import select from './modules/selectPage';
import start from './modules/start';

const rootReducer = combineReducers({
  nav,
  pages,
  select,
  start
});

export default rootReducer;
