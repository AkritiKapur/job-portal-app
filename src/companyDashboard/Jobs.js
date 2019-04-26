/**
 * Job card Holder component
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

        this.props.jobs.forEach(job => {
            cards.push(
                <JobCard key={job.id} job={job} />
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