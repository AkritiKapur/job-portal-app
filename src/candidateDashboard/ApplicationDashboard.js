import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jobs from './Jobs'
import Search from '../search/search';
import apiUrl from '../apiUtil/url';

class ApplicationDashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            jobs: [],
        };

        this.refresh = this.refresh.bind(this);
        this.fetchJobs = this.fetchJobs.bind(this);
    }
    
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };
        this.fetchJobs(requestOptions)
    }

    fetchJobs(requestOptions) {
        const user = JSON.parse(localStorage.getItem('user'));
        const query = `?id=${user.id}`;
        const jobsAPI = `${apiUrl}/getAppliedJobs${query}`;
    
        return fetch(jobsAPI, requestOptions)
            .then(results => {
                return results.text()
            })
            .then(text => JSON.parse(text))
            .then(apps => {
                const jobTemplate = apps.map(app => {
                    return {
                        "id": app.job.jobId,
                        "title": app.job.jobRole,
                        "description": app.job.jobDescription,
                        "company": app.job.companyObj.name,
                        "companyId": app.job.companyObj.id
                    }
                })

                this.setState({jobs: jobTemplate});
            });

    }

    refresh() {

    }

    render() {
        const jobs = this.state.jobs;
        const appliedTabOption = true;

        return (
            <div className="candidate-dashboard">
                <Jobs jobs={jobs} option={appliedTabOption}/>
            </div>
        );
    }
}

export default connect()(ApplicationDashboard);