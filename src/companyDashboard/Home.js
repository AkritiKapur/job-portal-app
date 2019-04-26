import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';

import { withRouter } from "react-router";

class CompanyHome extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div className="home-company-container">
                < Dashboard />
            </div>
        )
    }
}

export default withRouter(connect()(CompanyHome));