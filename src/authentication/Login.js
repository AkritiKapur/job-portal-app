import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logoutAction, success, request, failure} from './authenticationActions';
import { withRouter } from "react-router";
import apiUrl from '../apiUtil/url';

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

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({hasError: false});
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.login(username, password);
        }
    }

    login(username, password) {
        console.log({ username, password })
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