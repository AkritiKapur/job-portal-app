import React, { Component } from 'react';
import { connect } from 'react-redux';
import {request, success, failure} from './signupActions';
import { withRouter } from "react-router";
import apiUrl from '../apiUtil/url';

class Signup extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isCompany: false,
            name: '',
            username: '',
            password: '',
            hasError: false,
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        if ([name] == "username" && this.state.hasError) {
            this.setState({hasError: false});
        }
        this.setState({ [name]: value });
    }

    handleCheckboxChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState({item: isChecked});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, name, isCompany} = this.state;
        if (username && password && name) {
            this.Signup(username, password, name, isCompany);
        }
    }

    Signup (username, password, name, isCompany) {
        const flag = !isCompany;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json'},
            body: JSON.stringify({ username, password, flag, name }),
        };

        this.props.request({name});

        return fetch(`${apiUrl}/signup`, requestOptions)
            .then(results => {
                if (!results.ok) {
                    this.props.failure({});
                    this.setState({hasError:true});
                    return Promise.reject(results.statusText);
                }
                this.props.success({});
                this.props.changeTab('login');
            });
    }


    render() {
        const {registering} = this.props;
        const {submitted, hasError} = this.state;

        return(
            <div className="row">
                <div className="col-md-10 sign-up-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control sign-up-input" type="text" name="name" placeholder="Name" aria-label="Name" onChange={this.handleChange} required />
                        </div>
                        <div className={"form-group" + (submitted && hasError ? ' has-error' : '')}>
                            <input className="form-control syign-up-input" type="email" name="username" placeholder="Username" aria-label="Username" onChange={this.handleChange} required />
                            {submitted && hasError &&
                                <div className="help-block">Username already taken. Try another</div>
                            }
                        </div>
                        <div className="form-group">
                            <input className="form-control sign-up-input" type="password" name="password" placeholder="Password" aria-label="Password" onChange={this.handleChange} required />
                        </div>
                        <div className="custom-control custom-switch sign-up-input">
                            <input type="checkbox" name="isCompany" className="custom-control-input" id="profileSwitch" />
                            <label className="custom-control-label" for="profileSwitch">Company Account</label>
                        </div>
                        <button type="submit" className="btn btn-dark sign-up-input" disabled={!registering} >Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        registering: state.signup,
    })
}

function mapDispatchToProps(dispatch) {
    return({
        request: (user) => {dispatch(request(user))},
        success: (user) => {dispatch(success(user))},
        failure: (user) => {dispatch(failure(user))},
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));