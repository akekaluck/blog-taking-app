import moment from 'moment';
import { push, goBack } from 'react-router-redux';

export const BLOGLIST_INIT = 'BLOGLIST_INIT';


export const SHOW_REMOVE_DLG = 'SHOW_REMOVE_DLG';
export const CLOSE_REMOVE_DLG = 'CLOSE_REMOVE_DLG';

export const USER_SELECT_BLOG = 'USER_SELECT_BLOG';

export const USER_REMOVE_BLOG = 'USER_REMOVE_BLOG';
export const USER_ADD_BLOG = 'USER_ADD_BLOG';
export const VALIDATE_BLOG_ERROR = 'VALIDATE_BLOG_ERROR';

export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_DATE = 'SORT_BY_DATE';

export const init = () => {
  return (dispatch, getState) => {
    dispatch({ type: BLOGLIST_INIT })
  }
}

export const showAddBlogPage = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: {
      id: Date.now(),
      title: undefined,
      date: new Date(),
      content: undefined
    }})
    dispatch(push({
      pathname: '/add'
    }))
  }
}

export const showEditBlogPage = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: blog })
    dispatch(push({
      pathname: '/edit/'+ blog.id
    }))
  }
}

export const showBlogDetailPage = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: blog})
    dispatch(push({
      pathname: '/screen/'+ blog.id
    }))
  }
}

export const showRemoveDlg = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: blog })
    dispatch({ type: SHOW_REMOVE_DLG });
  }
}

export const closeRemoveDlg = () => {
  return { type: CLOSE_REMOVE_DLG };
}

export const removeBlog = () => {
  return (dispatch, getState) => {
    const { blogs } = getState().BlogList;
    const { Blog } = getState().Blog;
    const newBlogs = blogs.filter((b) => b.id !== Blog.id );
    dispatch({ type: USER_REMOVE_BLOG, payload: newBlogs });
    dispatch(closeRemoveDlg());
  }
}

export const addBlog = (blog) => {
  return (dispatch, getState) => {
    //validate
    const errorText = {};
    //Title max 64 and required
    if(!blog.title ){
      errorText.title = 'Is Required';
    }
    else if( !blog.title.length  || blog.title.length > 64){
      errorText.title = 'Max 64 characters long';
    }

    //Date cannot be a past date, required
    if(!moment(blog.date).isSameOrAfter(moment(), 'days')){
      errorText.date = 'Date cannot be a past date ';
    }

    //Content is required
    if(!blog.content || blog.content.length === 0){
      errorText.content = 'Is Required';
    }

    if(Object.keys(errorText).length > 0){
      dispatch({ type: VALIDATE_BLOG_ERROR, payload: errorText  });
    } else {
      dispatch({ type: USER_ADD_BLOG, payload: {
        blog, errorText: {}
      }});
      dispatch(goBack());
    }
  }
}

export const changefilter = (event, index, value) => {
  return (dispatch) => {
    if(value === 'Date'){
      dispatch({ type: SORT_BY_DATE });
    } else {
      dispatch({ type: SORT_BY_TITLE });
    }
  }
}
