import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import authentication from '../authentication/reducer';

export default combineReducers({
 sampleReducer,
 authentication
});