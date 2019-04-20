import {authenticationConstants} from './actions';

export const logoutAction = logout => ({
    type: authenticationConstants.LOGOUT,
    logout
})

export const request = user => ({
    type: authenticationConstants.LOGIN_REQUEST,
    user
})

export const success = user => ({
    type: authenticationConstants.LOGIN_SUCCESS,
    user 
})
