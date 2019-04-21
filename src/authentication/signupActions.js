import {authenticationConstants} from './actions';

export const request = user => ({
    type: authenticationConstants.REGISTER_REQUEST,
    user
})

export const success = user => ({
    type: authenticationConstants.REGISTER_SUCCESS,
    user 
})

export const failure = user => ({
    type: authenticationConstants.REGISTER_SUCCESS,
    user 
})