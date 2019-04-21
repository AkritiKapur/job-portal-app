import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logoutAction, success, request} from './authenticationActions';
import history from '../utils/history';
import { withRouter } from "react-router";

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        // this.props.logout({});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        this.props.request({username});

        let user = {
            id: 1,
            username: username,
        };

        this.props.success(user);
        localStorage.setItem("user", JSON.stringify(user));
        this.props.history.push('/');
    }

    render() {
        const { username, password, submitted } = this.state;

        return(
            <div className="row">
                <div className="col-md-10 sign-up-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control sign-up-input" name="username" type="text" placeholder="Username" aria-label="Username" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control sign-up-input" name="password" type="password" placeholder="Password" aria-label="Password" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-dark sign-up-input">Login</button>
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
    })
}

const mapStateToProps = state => ({
    ...state,
    loggingIn: state.authentication,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));