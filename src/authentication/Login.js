import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logoutAction, success, request, failure} from './authenticationActions';
import { withRouter } from "react-router";
import apiUrl from '../apiUtil/url';


/**
 * Login Component
 * Consists of the login form and authetication
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 * @borrows [jasonwatmore](http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example#login-page-folder)
 */
class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            hasError: false
        };

        this.props.logout({});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handles change of form inputs
     * updates the input value in the state
     * @param {e} event
     */
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({hasError: false});
        this.setState({ [name]: value });
    }

    /**
     * Handles submit of login form
     * calls the login API to authenticate username and password
     * @param {event} e
     */
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.login(username, password);
        }
    }

    /**
     * Calls login API
     * redirects on successful login to the user's home page
     * Sets success/error state
     * 
     * @param {String} username 
     * @param {String} password
     */
    login(username, password) {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };

        const query = "?username=" + username + "&password=" + password;
        this.props.request({username});
    
        return fetch(`${apiUrl}/signin${query}`, requestOptions)
            .then(results => {
                if (!results.ok) {
                    this.props.failure({});
                    this.setState({hasError:true});
                    return Promise.reject(results.statusText);
                    // throw Error(results.statusText);
                }
                return results.text()
            }
            ).then(text => JSON.parse(text))
            .then(user => {
                console.log(user);
                let userstate = {
                    "id": user.id,
                    "name": user.name,
                    "email": user.user.username,
                    "isCompany": !user.user.flag
                };
                this.props.success(userstate);
                localStorage.setItem('user', JSON.stringify(userstate));
                this.props.refresh();
                this.props.history.push('/');
            });
    }

    render() {
        const {loggingIn} = this.props;
        const {submitted, hasError} = this.state;

        return(
            <div className="row">
                <div className="col-md-10 sign-up-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className={"form-group" + (submitted && hasError ? ' has-error' : '')} >
                            <input className="form-control sign-up-input" name="username" type="email" placeholder="Username" aria-label="Username" onChange={this.handleChange} required />
                            {submitted && hasError &&
                                <div className="help-block">Either username or password incorrect</div>
                            }
                        </div>
                        <div className={"form-group" + (submitted && hasError ? ' has-error' : '')}>
                            <input className="form-control sign-up-input" name="password" type="password" placeholder="Password" aria-label="Password" onChange={this.handleChange} required />
                            {submitted && hasError &&
                                <div className="help-block">Either username or password incorrect</div>
                            }
                        </div>
                        <button type="submit" className="btn btn-dark sign-up-input" disabled={!loggingIn}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return({
        request: (user) => {dispatch(request(user))},
        success: (user) => {dispatch(success(user))},
        logout: (user) => {dispatch(logoutAction(user))},
        failure: (user) => {dispatch(failure(user))},
    })
}

const mapStateToProps = state => ({
    ...state,
    loggingIn: state.authentication,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));