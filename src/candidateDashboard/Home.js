/**
 * Home Component consists of all the dashboard
 * components for user.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Dashboard from './Dashboard';
import ApplicationDashboard from './ApplicationDashboard';

import { withRouter } from "react-router";

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'dashboard',
        };
    }

    render() {
        return (
            <div className="home-candidate-container">
                <Tabs
                    id="controlled-tab-home"
                    defaultActiveKey="dashboard"
                    mountOnEnter={true}
                >
                    <Tab eventKey="dashboard" title="Available Jobs">
                        <Dashboard />
                    </Tab>
                    <Tab eventKey="applied" title="Applications">
                        <ApplicationDashboard />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default withRouter(connect()(Home));