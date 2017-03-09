import { combineReducers } from 'redux';

const initState = {
  title: 'Blog',
  blogEntryList: {
    sortByDate: true,
    sortByTitle: true, 
    blogs: []
  },
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
