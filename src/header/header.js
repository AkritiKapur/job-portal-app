import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css'

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark portal-navbar">
                <a class="navbar-brand" href="#">JobPortal</a>
            </nav>
        );
    }
}

export default connect()(Header);