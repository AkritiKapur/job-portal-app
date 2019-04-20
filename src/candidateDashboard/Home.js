import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Dashboard from './Dashboard';
import Search from '../search/search';

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
                <Search />
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

export default connect()(Home);