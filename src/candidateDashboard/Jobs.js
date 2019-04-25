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
                <JobCard key={job.id} title={job.title} id={job.id} description={job.description} company={job.company} appId={job.appId} option={option} />
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