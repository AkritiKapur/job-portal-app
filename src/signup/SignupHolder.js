import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Signup.css'

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
                            <div className="row">
                                <div className="col-md-10 sign-up-form-container">
                                    <input className="form-control sign-up-input" type="text" placeholder="Username" aria-label="Username" />
                                    <input className="form-control sign-up-input" type="password" placeholder="Password" aria-label="Password" />
                                    <button type="button" class="btn btn-dark">Login</button>
                                </div>
                            </div>
                    </Tab>
                    <Tab eventKey="signup" title="Sign Up">
                        <div className="row">
                                <div className="col-md-10 sign-up-form-container">
                                    <input className="form-control sign-up-input" type="text" placeholder="Username" aria-label="Username" />
                                    <input className="form-control sign-up-input" type="password" placeholder="Password" aria-label="Password" />
                                    <div className="custom-control custom-switch sign-up-input">
                                        <input type="checkbox" className="custom-control-input" id="profileSwitch" />
                                        <label className="custom-control-label" for="profileSwitch">Company Account</label>
                                    </div>
                                    <button type="button" class="btn btn-dark">Signup</button>
                                </div>
                            </div>
                    </Tab>
                </Tabs>

            </div>
            </div>
        )
        
    }
}

export default connect()(SignupHolder);