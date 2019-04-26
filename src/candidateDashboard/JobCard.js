/**
 * Job Card Component for the Candidate
 * Displays all the information related to a job like skills, description, role etc.
 * It handles all the interactions such as apply and withdraw from a job.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { MdDone, MdDelete } from "react-icons/md";
import apiUrl from '../apiUtil/url';

class JobCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            applicationStatus: false,
            applicationWithdrawStatus: false,
        };

        this._apply = this._apply.bind(this);
        this._withdraw = this._withdraw.bind(this);
        this.applyForJob = this.applyForJob.bind(this);
        this.withdrawFromApplication = this.withdrawFromApplication.bind(this);
    }

    render() {
        const MAXLEN = 500;
        const {title, id, description, company, skills} = this.props;
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
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><span class="job-card-label">Required Skills: </span> {skills}</p>
                        {applicationStatusButton}
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Calls API to apply for a particular Job.
     */
    applyForJob = (event) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const candidate_id = user.id;
        const status = "Applied";
        const job_id = this.props.id;
        this._apply(job_id, candidate_id, status);
    }

    /**
     * Calls API to apply for a particular Job.
     * If the job has been successfully applied to
     * then sets the status of application as true in 
     * the component state
     * 
     * @param {Integer} job_id
     * @param {Integer} candidate_id
     * @param {String} status
     */
    _apply(job_id, candidate_id, status){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json'},
            body: JSON.stringify({ job_id, candidate_id, status}),
        };

        return fetch(`${apiUrl}/application`, requestOptions)
            .then(results => {
                if (!results.ok) {
                    return Promise.reject(results.statusText);
                }
                // Set application status as true if the request is Okay!
                this.setState({applicationStatus: true});
            });
    }
    
    /**
     * Withdraws a job application for the user
     */
    withdrawFromApplication = (event) => {
        this._withdraw(this.props.appId);
    }

    /**
     * Calls API to withdraw from an application
     * If the application is withdrawn successfully
     * then the withdraw status is set as true
     * in the components state.
     */
    _withdraw = (id) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json'},
        };

        return fetch(`${apiUrl}/deleteApplication?id=${id}`, requestOptions)
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