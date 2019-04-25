import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { MdDone, MdDelete } from "react-icons/md";

class JobCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            applicationWithdrawStatus: false,
        };

        this.withdrawJob = this.withdrawJob.bind(this);
    }

    render() {
        const MAXLEN = 500;
        const job = this.props.job;
        const desc = job.description.length > MAXLEN ? job.description.substring(0, MAXLEN) +'..': job.description;
        const withdrawn = <p className="withdrawn-text"><MdDone /> Withdrawn </p>;

        const applicationStatusButton = this.state.applicationWithdrawStatus ? withdrawn :
            <button className="btn btn-danger" onClick={this.withdrawFromApplication}><span><MdDelete />Delete</span></button>;


        return (
            <div className="col-sm-4 d-flex align-items-stretch job-card-holder">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{job.id}: {job.title}</h5>
                        <p className="card-text">{desc}</p>
                        {applicationStatusButton}
                    </div>
                </div>
            </div>
        )
    }

    withdrawJob = (event) => {
        // Load component which asks to reconsider
        this.setState({applicationWithdrawStatus: true});
    }
}

export default connect()(JobCard);