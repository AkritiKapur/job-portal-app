/**
 * Reducer for Login  
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 * @borrows [jasonwatmore](http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example#login-page-folder)
 */

import { authenticationConstants } from './actions';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

/**
 * Reducer for Login  
 */
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
      case authenticationConstants.LOGIN_FAILURE:
        return {};
      case authenticationConstants.LOGOUT:
        return {};
      default:
        return state
    }
  }