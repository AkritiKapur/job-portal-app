/**
 * Create Job Form Component for Company
 * Contains all the fields needed to create a new job.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import './Dashboard.css';

class CreateJobForm extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        show: false,
        role: '',
        description: '',
        location: '',
        skills: [],
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleTags = this.handleTags.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handles change of form inputs
     * updates the input value in the state
     * @param {e} event
     */
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({hasError: false});
        this.setState({ [name]: value });
    }

    /**
     * Handles Skill Tags
     * updates the state whenever a new skill is added
     * @param {Array} tags
     */
    handleTags(tags) {
        this.setState({skills: tags});
    }

    /**
     * Handles submit of job creation form
     * Creates a job with the information in the form.
     * @param {event} e
     */
    handleSubmit(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const company_id = user.id;
        const skills = this.state.skills.toString();
        const {role, description, location} = this.state;
        this.props.addJob(role, description, location, skills, company_id);
    }

    render () {
        return(
            <div className="create-job-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" >
                        <input className="form-control" name="role" type="text" placeholder="Job Role" aria-label="Job Role" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="10" name="description" type="text" placeholder="Description" aria-label="Description" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group" >
                        <input className="form-control" name="location" type="text" placeholder="Location" aria-label="Location" onChange={this.handleChange} required />
                    </div>
                    <TagsInput className="tags-input" value={this.state.skills} onChange={this.handleTags} placeholder="Add skills"/>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(CreateJobForm);