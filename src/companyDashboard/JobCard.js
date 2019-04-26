/**
 * Job Card Component for the Company
 * Displays all the information related to a job like skills, description, role etc.
 * It handles all the interactions such Deleting a job.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { MdDone, MdDelete } from "react-icons/md";
import './ApplicationDetailsPopup';
import ApplicationDetailsPopup from './ApplicationDetailsPopup';
import apiUrl from '../apiUtil/url';

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
        const withdrawn = <div className="withdrawn-text job-card-btn-container"><MdDone /> Deleted </div>;

        const applicationStatusButton = this.state.applicationWithdrawStatus ? withdrawn :
            <button className="btn btn-danger" onClick={this.withdrawJob}><span><MdDelete />Delete</span></button>;
        const viewApplication = job.apps && job.apps.length ? <ApplicationDetailsPopup applications={this.props.job.apps}/> : 
            (<button className="btn btn-warning" disabled> No Applications </button>)


        return (
            <div className="col-sm-4 d-flex align-items-stretch job-card-holder">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{job.id}: {job.title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><span class="job-card-label">Required Skills: </span> {job.skills}</p>
                        <div className="job-card-btn-container">
                            {applicationStatusButton}
                        </div>
                        <div className="job-card-btn-container">
                            {viewApplication}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Deletes a job.
     */
    withdrawJob = (event) => {
        // Load component which asks to reconsider
        this._withdraw(this.props.job.id);
    }

    /**
     * Calls API to delete a job.
     * If the application is deleted successfully
     * then the withdraw status is set as true
     * in the components state.
     */
    _withdraw = (id) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json'},
        };

        return fetch(`${apiUrl}/deleteJob?id=${id}`, requestOptions)
            .then(results => {
                if (!results.ok) {
                    return Promise.reject(results.statusText);
                }
                // Set application status as true if the request is Okay!
                this.setState({applicationWithdrawStatus: true});
            });
    }

}

export default connect()(JobCard);