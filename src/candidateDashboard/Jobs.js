import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard';

class Jobs extends Component {
    render() {
        const cards = [];

        this.props.jobs.forEach(job => {
            cards.push(
                <JobCard title={job.title} id={job.id} description={job.description} />
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