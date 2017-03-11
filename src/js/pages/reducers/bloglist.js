import moment from 'moment';
import * as Actions from '../actions';

const initStateBlogList = {
  sortBy: 'Date',
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


const sortByDate = (state, action) => {
  const sortFn = (a, b) => {
    const aDate = moment(a.date);
    const bDate = moment(b.date);
    if(aDate.isBefore(bDate)){
      return -1;
    }
    if(aDate.isAfter(bDate)){
      return 1;
    }
    return 0;
  }
  const newBlogs = [...state.blogs.sort(sortFn)]
  return {...state,
    sortBy: 'Date',
    blogs: newBlogs
  }
}
const sortByTitle = (state, action) => {
  const sortFn = (a, b) => {
    console.log(a, b);
    if(a.title < b.title){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    return 0;
  }
  const newBlogs = [...state.blogs.sort(sortFn)];
  return {...state,
    sortBy: 'Title',
    blogs: newBlogs
  }
}

const BlogList = (state = initStateBlogList, action) => {
  switch (action.type) {
    case Actions.USER_REMOVE_BLOG:
      return {...state,
        blogs: action.payload
      }
    case Actions.USER_ADD_BLOG:
      return userAddBlog(state, action)
    case Actions.SORT_BY_DATE:
      return sortByDate(state, action)
    case Actions.SORT_BY_TITLE:
      return sortByTitle(state, action)
    default:
      return state;
  }
}

export default BlogList;
