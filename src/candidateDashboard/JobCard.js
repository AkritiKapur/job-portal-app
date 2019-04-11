import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css'

class JobCard extends Component {
    render() {
        const MAXLEN = 500;
        const title = this.props.title;
        const id = this.props.id;
        const description = this.props.description;

        const desc = description.length > MAXLEN ? description.substring(0, MAXLEN) +'..': description

        return (
            <div class="col-sm-4 d-flex align-items-stretch job-card-holder">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{id}: {title}</h5>
                        <p class="card-text">{desc}</p>
                        <a href="#" class="btn btn-primary">Apply</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(JobCard);