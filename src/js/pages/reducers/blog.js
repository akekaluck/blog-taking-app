import { combineReducers } from 'redux';
import * as Actions from '../actions';
import ErrorText from './errortext';
import { LOAD } from 'redux-storage';
import moment from 'moment';

const initStateBlog = {
  title: undefined,
  date: new Date(),
  content: undefined
}

const Blog = (state = initStateBlog, action, stateb) => {
  switch (action.type) {
    case Actions.USER_SELECT_BLOG:
      return { ...action.payload }
    case LOAD:
      return { ...action.payload.Blog, date: new Date(moment(action.payload.Blog.date).format())  }
    default:
      return state;
  }
}

const BlogCombinedReducer = combineReducers({
  Blog,
  ErrorText
});

export default BlogCombinedReducer;
