export const SHOW_BLOG = 'SHOW_BLOG';

export const init = () => {
  return (dispatch, getState) => {
    const blog = {...getState().Blog};
    dispatch({ type: SHOW_BLOG, payload: blog  })
  }
}
