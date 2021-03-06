/**
 * Application Details Component for Job
 * Modal component that gives all the information related to applications belonging to a jobcard
 * such as the Email address of the candidate, the status of the application.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdZoomIn} from "react-icons/md";
import apiUrl from '../apiUtil/url';


class ApplicationDetailsPopup extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    /**
     * Handles closing the modal.
     * Sets show in the state as false
     */
    handleClose() {
      this.setState({ show: false });
    }
  
    /**
     * Handles Opening the modal
     * Sets show in the state as true
     */
    handleShow() {
      this.setState({ show: true });
    }

    render() {

        const applications = this.props.applications;

        return (
            <>
                <Button variant="info" onClick={this.handleShow}>
                    <MdZoomIn /> View Applications
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Applications</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table class="table table-dark">
                            <thead>
                                <tr className="bg-info">
                                    <th scope="col">#</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((app, i) => (
                                    <tr className="bg-info">
                                    <th scope="row">{i+1}</th>
                                    <td>{app.candidate}</td>
                                    <td>{app.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

  export default connect()(ApplicationDetailsPopup);