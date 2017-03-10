import { combineReducers } from 'redux';

const initState = {
  title: 'Blog',
  sortBy: ['Date', 'Title'],
  blogs: [
    {title: 'Blog 1', date: new Date(), content: 'Hello world' },
    {title: 'Blog 2', date: new Date(), content: 'Hello world 2' }
  ],
  blogDisplayScreen: {
    title: undefined,
    date: new Date(),
    content: undefined
  },
  blogEditScreen: {
    title: undefined,
    date: new Date(),
    content: undefined
  }
}

const App = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD':
      return {...state};
    default:
      return state;
  }
}

export default combineReducers({
  App
});
