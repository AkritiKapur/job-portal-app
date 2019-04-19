import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-10 sign-up-form-container">
                    <div className="form-group">
                        <input className="form-control sign-up-input" type="text" placeholder="First Name" aria-label="First Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control sign-up-input" type="text" placeholder="Last Name" aria-label="Last Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control sign-up-input" type="text" placeholder="Username" aria-label="Username" />
                    </div>
                    <div className="form-group">
                        <input className="form-control sign-up-input" type="password" placeholder="Password" aria-label="Password" />
                    </div>
                    <div className="custom-control custom-switch sign-up-input">
                        <input type="checkbox" className="custom-control-input" id="profileSwitch" />
                        <label className="custom-control-label" for="profileSwitch">Company Account</label>
                    </div>
                    <button type="submit" className="btn btn-dark sign-up-input">Signup</button>
                </div>
            </div>
        )
    }
}

export default connect()(Signup);