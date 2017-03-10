export const SHOW_BLOG_EDIT = 'SHOW_BLOG_EDIT';

export const init = () => {
  return (dispatch, getState) => {
    const blog = {...getState().Blog};
    dispatch({ type: SHOW_BLOG_EDIT, payload: blog  })
  }
}
