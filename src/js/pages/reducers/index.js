import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Actions from '../actions';

import BlogList from './bloglist';
import Blog from './blog';

const initState = {
  title: 'Blog',
  remove_dlg_open: false,
}

const App = (state = initState, action) => {
  switch (action.type) {
    case Actions.SHOW_REMOVE_DLG:
      return {...state, remove_dlg_open: true }
    case Actions.CLOSE_REMOVE_DLG:
      return {...state, remove_dlg_open: false }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  App,
  BlogList,
  Blog,
  routing: routerReducer
});

export default rootReducer;
