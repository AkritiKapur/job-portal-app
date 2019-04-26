/**
 * Login Component
 * Consists of the login form and authetication
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Routes to login when user not autenticated.
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export default PrivateRoute