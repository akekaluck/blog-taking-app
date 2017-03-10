const LOAD_BLOGS = "LOAD_BLOGS";


export const loadBlogs = () => {
  return (dispatch, getState) => {
    dispatch({ type: LOAD_BLOGS })
  }
}
