import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jobs from './Jobs'
import Search from '../search/search';
import apiUrl from '../apiUtil/url';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: [],
            filters: {},
            jobs: []
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.refresh = this.refresh.bind(this);
        this.fetchRoles = this.fetchRoles.bind(this);
        this.fetchJobs = this.fetchJobs.bind(this);
    }
    
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };
        this.fetchRoles(requestOptions);
        this.fetchJobs(requestOptions)
    }


    fetchRoles(requestOptions) {
        const roleFilterAPI = `${apiUrl}/getRoles`;
    
        return fetch(roleFilterAPI, requestOptions)
            .then(results => {
                return results.text()
            })
            .then(text => JSON.parse(text))
            .then(roles => {
                const newItems = this.state.items.concat({key: "roles", data: roles});
                this.setState({items: newItems});
                this.setState({filters: {roles: []}});
            });
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
                const j =  jobs || [];
                const jobTemplate = j.map(job => {
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

    handleFilter(filterName, values) {
        this.setState({filters: {[filterName]: values}});
    }

    refresh() {
        // refresh the job cards in the UI
    }

    render() {
        const items = this.state.items;
        const jobs = this.state.jobs;
        const appliedTabOption = false;

        return (
            <div className="candidate-dashboard">
                <Search items={items} handleFilter={this.handleFilter} refresh={this.refresh}/>
                <hr />
                <Jobs jobs={jobs} option={appliedTabOption}/>
            </div>
        );
    }
}

export default connect()(Dashboard);