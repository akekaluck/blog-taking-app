import * as Actions from '../actions';

const initStateBlogList = {
  sortBy: ['Date', 'Title'],
  remove_dlg_open: false,
  blogs: [
    {id: 1, title: 'Blog 1', date: new Date(), content: 'Hello world' },
    {id: 2, title: 'Blog 2', date: new Date(), content: 'Hello world 2' }
  ]
}

const userAddBlog = (state, action) => {
  let newState = {...state};
  const { blog } = action.payload;
  let blogInList = newState.blogs.find((b) => b.id == blog.id);
  if(blogInList){
    console.log('Update', blogInList, blog);
    newState.blogs = newState.blogs.map((b) => {
      return b.id === blog.id?blog:b;
    })
  } else {
    console.log('Add');
    newState.blogs.push(blog);
  }
  return newState;
}

const BlogList = (state = initStateBlogList, action) => {
  switch (action.type) {
    case Actions.SHOW_REMOVE_DLG:
      return {...state, remove_dlg_open: true }
    case Actions.CLOSE_REMOVE_DLG:
      return {...state, remove_dlg_open: false }
    case Actions.USER_REMOVE_BLOG:
      return {...state,
        blogs: action.payload
      }
    case Actions.USER_ADD_BLOG:
      return userAddBlog(state, action)
    default:
      return state;
  }
}

export default BlogList;
