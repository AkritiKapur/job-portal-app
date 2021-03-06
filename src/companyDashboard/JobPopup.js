/**
 * Job Modal Component that holds
 * the create job form
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdAdd} from "react-icons/md";
import CreateJobForm from "./CreateJobForm";
import apiUrl from '../apiUtil/url';


class JobPopup extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.addJob = this.addJob.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    /**
     * Handles Closing of modal
     * show is set as false in the state
     */
    handleClose() {
      this.setState({ show: false });
    }
  
    /**
     * Handles Showing of modal
     * show is set as true in the state
     */
    handleShow() {
      this.setState({ show: true });
    }

    /**
     *  Calls API to create a job
     * @param {String} role: Job Role Applying to
     * @param {String} description: Job description
     * @param {String} location: Job location
     * @param {Array} skills: Job skills
     * @param {Integer} company_id: Company logged in
     */
    addJob(role, description, location, skills, company_id) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json'},
            body: JSON.stringify({ role, description, location, skills, company_id}),
        };

        return fetch(`${apiUrl}/addJob`, requestOptions)
            .then(results => {
                if (!results.ok) {
                    return Promise.reject(results.statusText);
                }
                this.setState({show: false});
                this.props.refreshJobs();
            });
    }
  
    render() {
      return (
        <>
         <Button variant="info" onClick={this.handleShow}>
                    <MdAdd /> Add Job
        </Button>
          <Modal show={this.state.show} onHide={this.handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Add a New Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateJobForm addJob={this.addJob}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  export default connect()(JobPopup);