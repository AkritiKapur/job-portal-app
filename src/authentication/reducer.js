import { authenticationConstants } from './actions';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
    switch (action.type) {
      case authenticationConstants.LOGIN_REQUEST:
        return {
            loggingIn: true,
            user: action.user
        };
      case authenticationConstants.LOGIN_SUCCESS:
        return {
            loggedIn: true,
            user: action.user
        };
      case authenticationConstants.LOGOUT:
        return {};
      default:
        return state
    }
  }