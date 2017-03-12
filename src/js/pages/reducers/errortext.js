import * as Actions from '../actions';

const initStateErrorText = {
  title: undefined,
  date: undefined,
  content: undefined
}

const ErrorText = (state = initStateErrorText, action, stateb) => {
  switch (action.type) {
    case Actions.VALIDATE_BLOG_ERROR:
      return {...action.payload}
    case Actions.USER_ADD_BLOG:
      return {...action.payload.errorText}
    default:
      return state;
  }
}

export default ErrorText;
