import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Signup.css'

class SignupHolder extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'signup',
        };
    }

    render() {
        return (
            <div class="row">
            <div class="col-md-6 sign-up-container">
                <Tabs
                    id="controlled-tab-home"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="signup" title="Sign Up">
                        <input className="form-control sign-up-input" type="text" placeholder="Username" aria-label="Username" />
                        <input className="form-control sign-up-input" type="password" placeholder="Password" aria-label="Password" />
                    </Tab>
                    <Tab eventKey="login" title="Login">
                        <input className="form-control sign-up-input" type="text" placeholder="Username" aria-label="Username" />
                        <input className="form-control sign-up-input" type="password" placeholder="Password" aria-label="Password" />
                    </Tab>
                </Tabs>
            </div>
                
            </div>
        )
        
    }
}

export default connect()(SignupHolder);