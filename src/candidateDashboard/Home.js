import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Dashboard from './Dashboard';
import Search from '../search/search';
import { withRouter } from "react-router";

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'dashboard',
        };
    }

    render() {
        const items = [
            {
                key: "test1"
            },
            {
                key: "test2"
            }
        ]

        return (
            <div className="home-candidate-container">
                <Search items={items} />
                <Tabs
                    id="controlled-tab-home"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="dashboard" title="Available Jobs">
                        <Dashboard />
                    </Tab>
                    <Tab eventKey="applied" title="Applications">
                        <Dashboard />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default withRouter(connect()(Home));