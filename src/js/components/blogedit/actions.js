import moment from 'moment';
import { push } from 'react-router-redux';

export const SHOW_BLOG_EDIT = 'SHOW_BLOG_EDIT';
export const USER_ADD_BLOG = 'USER_ADD_BLOG';
export const USER_EDIT_BLOG = 'USER_EDIT_BLOG';
export const CONTENT_BLOG_ERROR = 'CONTENT_BLOG_ERROR';

export const init = () => {
  return (dispatch, getState) => {
    const blog = {...getState().Blog};
    dispatch({ type: SHOW_BLOG_EDIT, payload: blog  })
  }
}

export const onAddBlog = (blog) => {
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
      dispatch({ type: CONTENT_BLOG_ERROR, payload: errorText  });
    } else {
      dispatch({ type: USER_ADD_BLOG, payload: {
        blog, errorText: {}
      }});
      dispatch(push({
        pathname: '/'+ blog.id
      }))
    }
  }
}
