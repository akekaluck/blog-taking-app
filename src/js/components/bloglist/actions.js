import { push } from 'react-router-redux';

export const BLOGLIST_INIT = 'BLOGLIST_INIT';

export const USER_SELECT_BLOG = 'USER_SELECT_BLOG';
export const USER_REMOVE_BLOG = 'USER_REMOVE_BLOG';

export const SHOW_REMOVE_DLG = 'SHOW_REMOVE_DLG';
export const CLOSE_REMOVE_DLG = 'CLOSE_REMOVE_DLG';
export const REMOVE_BLOG = 'REMOVE_BLOG';

export const init = () => {
  return (dispatch, getState) => {
    dispatch({ type: BLOGLIST_INIT })
  }
}

export const onAdd = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: {} })
    dispatch(push({
      pathname: '/edit/add'
    }))
  }
}

export const onEdit = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: blog })
    dispatch(push({
      pathname: '/edit/'+ blog.id
    }))
  }
}


export const onShowRemoveDlg = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: blog })
    dispatch({ type: SHOW_REMOVE_DLG });
  }
}

export const onRemoveDlgClose = () => {
  return { type: CLOSE_REMOVE_DLG };
}

export const onRemoveBlog = () => {
  return (dispatch, getState) => {
    const { blogs } = getState().BlogList;
    const { Blog } = getState().Blog;
    const newBlogs = blogs.filter((b) => b.id !== Blog.id );
    dispatch({ type: REMOVE_BLOG, payload: newBlogs });
    dispatch(onRemoveDlgClose());
  }
}

export const onDetail = (blog) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECT_BLOG, payload: blog})
    dispatch(push({
      pathname: '/screen/'+ blog.id
    }))
  }
}
