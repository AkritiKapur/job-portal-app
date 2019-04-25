import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiUrl from '../apiUtil/url';
import Jobs from './Jobs';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            jobs: []
        };

        this.fetchJobs = this.fetchJobs.bind(this);
    }
    
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };
        this.fetchJobs(requestOptions);
    }

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
                                "candidate": app.candidate.name,
                                "skills": app.candidate.skills,
                                "status": app.status
                            }
                        }),
                    }
                });

                console.log(jobTemplate);
                this.setState({jobs: jobTemplate});
            });

    }

    render() {
        const jobs = this.state.jobs;

        return (
            <div className="company-dashboard">
                <Jobs jobs={jobs} />
            </div>
        );
    }
}

export default connect()(Dashboard);