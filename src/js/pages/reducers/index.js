import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Actions from '../actions';

import BlogList from './bloglist';
import Blog from './blog';

const initState = {
  title: 'Blog'
}

const App = (state = initState, action) => {
  switch (action.type) {
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
