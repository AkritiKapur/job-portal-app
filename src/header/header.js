import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { loggedIn, user } = this.props;
        return (
            <nav className="navbar navbar-dark bg-dark portal-navbar">
                <a className="navbar-brand" href="#">JobPortal</a>
                { loggedIn && 
                    <span className="navbar-brand">Welcome {user.username}</span>
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

export default connect(mapStateToProps)(Header);