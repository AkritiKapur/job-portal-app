/**
 * Dashboard Component consists of jobs
 * belonging to the company
 * Actions can be performed on these jobs.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiUrl from '../apiUtil/url';
import Jobs from './Jobs';
import JobPopup from './JobPopup';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            jobs: []
        };

        this.fetchJobs = this.fetchJobs.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    
    /**
     * Executes only when the component is munted
     * Calls the fetch job function to fetch
     * all jobs belonging to the company.
     */
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };
        this.fetchJobs(requestOptions);
    }

    /**
     * Calls fetch jobs on refresh
     * This is called when adding a new job!
     */
    refresh() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };
        this.fetchJobs(requestOptions);
    }

    /**
     * Calls API to get all jobs belonging
     * to the company logged in.
     * On success, updates the job to the
     * component state.
     * @param {Object} requestOptions 
     */
    fetchJobs(requestOptions) {

        const user = JSON.parse(localStorage.getItem('user'));
        const query = `?id=${user.id}`;
        const jobsAPI = `${apiUrl}/getJobsForCompany${query}`;
    
        return fetch(jobsAPI, requestOptions)
            .then(results => {
                return results.text()
            })
            .then(text => {
                return JSON.parse(text)
            })
            .then(jobs => {
                const j = jobs;
                const jobTemplate = j.map(job => {
                    return {
                        "id": job.jobId,
                        "title": job.role,
                        "description": job.description,
                        "skills": job.skills,
                        "apps": job.apps && job.apps.map(app => {
                            return {
                                "candidate": app.candidate.user.username,
                                "skills": app.candidate.skills,
                                "status": app.status
                            }
                        }),
                    }
                });
                this.setState({jobs: jobTemplate});
            });

    }

    render() {
        const jobs = this.state.jobs;

        return (
            <div className="company-dashboard">
                <JobPopup refreshJobs={this.refresh}/>
                <hr />
                <Jobs jobs={jobs} />
            </div>
        );
    }
}

export default connect()(Dashboard);