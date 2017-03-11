import * as Actions from './actions';

const initState = {
  remove_dlg_open: false,
  blogs: [
    {id: 1, title: 'Blog 1', date: new Date(), content: 'Hello world' },
    {id: 2, title: 'Blog 2', date: new Date(), content: 'Hello world 2' }
  ]
}

const BlogList = (state = initState, action) => {
  switch (action.type) {
    case Actions.SHOW_REMOVE_DLG:
      return {...state, remove_dlg_open: true }
    case Actions.CLOSE_REMOVE_DLG:
      return {...state, remove_dlg_open: false }
    case Actions.REMOVE_BLOG:
      return {...state,
        blogs: action.payload
      }
    case 'USER_ADD_BLOG':
      return {...state,
        blogs: [...state.blogs, {...action.payload}]
      }
    default:
      return state;
  }
}

export default BlogList;
