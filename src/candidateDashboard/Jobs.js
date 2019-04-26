/**
 * Job Component for the Candidate
 * Consists of all the Job cards available to the candidate.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard';

class Jobs extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const cards = [];
        const option = this.props.option;

        this.props.jobs.forEach(job => {
            cards.push(
                <JobCard key={job.id} title={job.title} id={job.id} description={job.description} company={job.company} appId={job.appId} skills={job.skills} option={option} />
            )
        });
        return (
            <div class="row">
                {cards}
            </div>
        )
    }
}

export default connect()(Jobs);