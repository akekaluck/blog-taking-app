import * as Actions from './actions';

const initState = {
  title: undefined,
  date: undefined,
  content: undefined
}

const ErrorText = (state = initState, action, stateb) => {
  switch (action.type) {
    case Actions.CONTENT_BLOG_ERROR:
      return {...action.payload}
    case Actions.USER_ADD_BLOG:
      return {...action.payload.errorText}
    default:
      return state;
  }
}

export default ErrorText;
