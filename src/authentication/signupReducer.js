/**
 * Reducer for Signup
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */
import { authenticationConstants } from './actions';

const signup = (state = {}, action) => {
    switch (action.type) {
      case authenticationConstants.REGISTER_REQUEST:
        return {
            registering: true,
        };
      case authenticationConstants.REGISTER_SUCCESS:
        return {};
      case authenticationConstants.REGISTER_FAILURE:
        return {};
      default:
        return state
    }
  }

export default signup;