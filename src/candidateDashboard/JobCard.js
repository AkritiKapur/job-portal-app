import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { MdDone, MdDelete } from "react-icons/md";

class JobCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            applicationStatus: false,
            applicationWithdrawStatus: false,
        };

        this.applyForJob = this.applyForJob.bind(this);
        this.withdrawFromApplication = this.withdrawFromApplication.bind(this);
    }

    render() {
        const MAXLEN = 500;
        const {title, id, description, company} = this.props;
        const applied = <p className="applied-text"><MdDone /> Applied </p>;
        const desc = description.length > MAXLEN ? description.substring(0, MAXLEN) +'..': description;
        const appliedTabOption = !this.props.option;
        const withdrawn = <p className="withdrawn-text"><MdDone /> Withdrawn </p>;

        const applicationStatusButton = appliedTabOption ? 
        (this.state.applicationStatus ? applied : <button className="btn btn-primary" onClick={this.applyForJob}>Apply</button>)
        : (this.state.applicationWithdrawStatus ? withdrawn :
            <button className="btn btn-danger" onClick={this.withdrawFromApplication}><span><MdDelete />Withdraw</span></button>);


        return (
            <div className="col-sm-4 d-flex align-items-stretch job-card-holder">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{id}: {title}</h5>
                        <h6 className="card-title">{company}</h6>
                        <p className="card-text">{desc}{appliedTabOption}</p>
                        {applicationStatusButton}
                    </div>
                </div>
            </div>
        )
    }

    applyForJob = (event) => {
        this.setState({applicationStatus: true});
        // TODO: add call to send job application to backend.
    }

    withdrawFromApplication = (event) => {
        // Load component which asks to reconsider
        this.setState({applicationWithdrawStatus: true});
    }
}

export default connect()(JobCard);