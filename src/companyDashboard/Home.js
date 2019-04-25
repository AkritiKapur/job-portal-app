import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import JobPopup from './JobPopup';
import Button from 'react-bootstrap/Button';

import { withRouter } from "react-router";

class CompanyHome extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div className="home-company-container">
                <JobPopup />
                <hr />
                < Dashboard />
            </div>
        )
    }
}

export default withRouter(connect()(CompanyHome));