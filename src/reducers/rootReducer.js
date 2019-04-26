import { combineReducers } from 'redux';
import authentication from '../authentication/reducer';
import signup from '../authentication/signupReducer';

export default combineReducers({
 authentication,
 signup,
});