import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';
import {logoutAction} from '../authentication/authenticationActions';
import history from '../utils/history';
import { withRouter } from "react-router";

class Header extends Component {
    constructor(props) {
        super(props);

        this.initLogout = this.initLogout.bind(this);
    }

    initLogout(e) {
        e.preventDefault();
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.props.logout({});
        this.props.history.push('/login');
    };

    render() {
        const { loggedIn, user } = this.props;
        return (
            <nav className="navbar navbar-dark bg-dark portal-navbar">
                <a className="navbar-brand" href="#">JobPortal</a>
                { loggedIn && 
                    <span className="navbar-brand">Welcome {user.name}
                    <button onClick={this.initLogout}>Logout ?</button>
                    </span>
                }
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.authentication.loggedIn,
        user: state.authentication.user,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        logout: (user) => {dispatch(logoutAction(user))}
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));