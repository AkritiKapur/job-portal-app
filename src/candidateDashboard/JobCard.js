import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { MdDone } from "react-icons/md";

class JobCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            applicationStatus: false,
        };
    }

    render() {
        const MAXLEN = 500;
        const title = this.props.title;
        const id = this.props.id;
        const description = this.props.description;
        const applied = <p class="applied-text"><MdDone /> Applied </p>;
        const desc = description.length > MAXLEN ? description.substring(0, MAXLEN) +'..': description

        return (
            <div class="col-sm-4 d-flex align-items-stretch job-card-holder">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{id}: {title}</h5>
                        <p class="card-text">{desc}</p>
                        {this.state.applicationStatus ? applied :
                        <button class="btn btn-primary" onClick={this.applyForJob}>Apply</button>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }

    applyForJob = (event) => {
        this.setState({applicationStatus: true});
        // TODO: add call to send job application to backend.
    }
}

export default connect()(JobCard);