// import * as Actions from './actions';

const Blog = (state = {}, action, stateb) => {
  switch (action.type) {
    case 'USER_SELECT_BLOG':
      return { ...action.payload }
    default:
      return state;
  }
}

export default Blog;
