import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import BlogList from '../components/bloglist/reducer';
import Blog from '../components/blogscreen/reducer';
import ErrorText from '../components/blogedit/reducer';

const initState = {
  title: 'Blog',
  sortBy: ['Date', 'Title'],
  // blogslist: [
  //   {id: 1, title: 'Blog 1', date: new Date(), content: 'Hello world' },
  //   {id: 2, title: 'Blog 2', date: new Date(), content: 'Hello world 2' }
  // ],
  //Blog: {
  // blog: {
  //   id: 1,
  //   title: 'Blog 1',
  //   date: new Date(),
  //   content: 'Hello world'
  // },
  // errorText: {}
  // }
}

const App = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const blogCombinedReducer = combineReducers({
  Blog,
  ErrorText
});

const rootReducer = combineReducers({
  App,
  BlogList,
  Blog: blogCombinedReducer,
  routing: routerReducer
});

export default rootReducer;
