import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../search/search';
import apiUrl from '../apiUtil/url';

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
        // this.fetchJobs(requestOptions);
    }

    fetchJobs(requestOptions) {
        const user = JSON.parse(localStorage.getItem('user'));
        const query = `?id=${user.id}`;
        const jobsAPI = `${apiUrl}/getNotAppliedJobs${query}`;
    
        return fetch(jobsAPI, requestOptions)
            .then(results => {
                return results.text()
            })
            .then(text => JSON.parse(text))
            .then(jobs => {
                const jobTemplate = jobs.map(job => {
                    return {
                        "id": job.jobId,
                        "title": job.jobRole,
                        "description": job.jobDescription,
                        "company": job.companyObj.name,
                        "companyId": job.companyObj.id,
                    }
                })

                this.setState({jobs: jobTemplate});
            });

    }

    render() {
        const jobs = this.state.jobs;
        const appliedTabOption = false;

        return (
            <div className="company-dashboard">
                {/* <Jobs jobs={jobs} option={appliedTabOption}/> */}
            </div>
        );
    }
}

export default connect()(Dashboard);