import moment from 'moment';
import * as Actions from '../actions';
import { LOAD } from 'redux-storage';

const initStateBlogList = {
  sortBy: 'Date',
  blogs: [
    {id: 1, title: 'Hello World', date: new Date(),
    content: '<p>Hello world</p>'
    + '<p><img alt="" src="http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg" style="height:150px; width:200px" />'
    + '</p><p>Hello&nbsp;</p>' },
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

const convertDateStringToDate = (state, action) => {
  return {...state,
    blogs: state.blogs.map((blog) => {
      return {...blog, date: new Date(blog.date)}
    })
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
    case LOAD:
      return convertDateStringToDate(state, action);
    default:
      return state;
  }
}

export default BlogList;
