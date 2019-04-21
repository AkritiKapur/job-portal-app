import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import authentication from '../authentication/reducer';
import signup from '../authentication/signupReducer';

export default combineReducers({
 sampleReducer,
 authentication,
 signup,
});