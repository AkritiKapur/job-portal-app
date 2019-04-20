import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import authenticationReducer from '../authentication/reducer';

export default combineReducers({
 sampleReducer,
 authenticationReducer
});