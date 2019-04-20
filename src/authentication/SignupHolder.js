import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Signup.css';
import Signup from './Signup';
import Login from './Login';

class SignupHolder extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'login',
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 sign-up-container container-fluid">
                    <Tabs
                        id="controlled-tab-home"
                        activeKey={this.state.key}
                        onSelect={key => this.setState({ key })}
                    >
                        <Tab eventKey="login" title="Login">
                            <Login />
                        </Tab>
                        <Tab eventKey="signup" title="Sign Up">
                            <Signup />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
        
    }
}

export default connect()(SignupHolder);