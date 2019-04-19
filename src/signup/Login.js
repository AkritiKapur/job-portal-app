import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-10 sign-up-form-container">
                    <form>
                        <div className="form-group">
                            <input className="form-control sign-up-input" type="text" placeholder="Username" aria-label="Username" />
                        </div>
                        <div className="form-group">
                            <input className="form-control sign-up-input" type="password" placeholder="Password" aria-label="Password" />
                        </div>
                        <button type="submit" className="btn btn-dark sign-up-input">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Login);