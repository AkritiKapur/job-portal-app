/**
 * Dashboard Component consists of jobs that the
 * candidate hasn't applied to.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */

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
        this.fetchFilteredJobs = this.fetchFilteredJobs.bind(this);
        this.fetchSkills = this.fetchSkills.bind(this);
    }
    
    /**
     * Executes only when the components mounts
     * fetches the roles for the job filter
     * fetches the jobs the candidate hasn't applied to.
     */
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };
        this.fetchRoles(requestOptions);
        this.fetchJobs(requestOptions);
        this.fetchSkills(requestOptions);
    }

    /**
     * Calls API to get all the Job Roles that are available.
     * Sets the filter and all roles in the components state.
     * This state is updated whenever a new filter is added.
     * 
     * @param {Object} requestOptions 
     */
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

    /**
     * Calls API to get all the Job Skills that are available.
     * Sets the filter and all roles in the components state.
     * This state is updated whenever a new filter is added.
     * 
     * @param {Object} requestOptions 
     */
    fetchSkills(requestOptions) {
        const roleFilterAPI = `${apiUrl}/skills`;
    
        return fetch(roleFilterAPI, requestOptions)
            .then(results => {
                return results.text()
            })
            .then(text => JSON.parse(text))
            .then(skills => {
                const s = skills.map(skill => skill.skill);
                console.log(s);
                const newItems = this.state.items.concat({key: "skills", data: s});
                this.setState({items: newItems});
                this.setState({filters: {skills: []}});
            });
    }

    /**
     * Calls API to fetch all the jobs the candidate
     * hasn't applied to.
     * Adds the jobs to the components state
     * @param {Object} requestOptions 
     */
    fetchJobs(requestOptions) {
        const user = JSON.parse(localStorage.getItem('user'));
        const query = `?id=${user.id}`;
        const jobsAPI = `${apiUrl}/getNotAppliedJobs${query}`;


        if (!user.isCompany) {
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
                            "skills": job.jobSkills
                        }
                    })

                    this.setState({jobs: jobTemplate});
                });
        }

    }

    /**
     * Fetches filtered jobs once filter is applied.
     * @param {*} requestOptions 
     */
    fetchFilteredJobs(requestOptions) {
        const roles = this.state.filters.roles || [];
        const skills = this.state.filters.skills || [];
        const query = `?role=${roles.toString()}&skills=${skills.toString()}`;
        const jobsAPI = `${apiUrl}/jobs${query}`;

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
                        "skills": job.jobSkills
                    }
                })

                this.setState({jobs: jobTemplate});
            });

    }

    /**
     * Adds all the filter values selected
     * for the filter to the component state
     * 
     * @param {String} filterName 
     * @param {Array} values 
     */
    handleFilter(filterName, values) {
        this.setState({filters: {[filterName]: values}});
    }

    /**
     * Fetches jobs and updates the Dashboard
     */
    refresh() {
        console.log("here", this.state);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Accept': 'application/json' },
        };
        this.fetchFilteredJobs(requestOptions);
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