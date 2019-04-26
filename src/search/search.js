/**
 * Search component
 * Supports dynamic loading of Search (filter) dropdowns.
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDropdown from './searchDropdown';
import './search.css';

class Search extends Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    /**
     * Sends the filter value to the parent
     * component to filter jobs.
     * @param {String} filterName 
     * @param {List} values 
     */
    handleChecked(filterName, values) {
        // Calls function in the parent to update selected filter values
        this.props.handleFilter(filterName, values);
    }

    /**
     * handles Filter form submit.
     * After submission, the jobs are refreshed.
     * @param {event} e 
     */
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        // Refreshes the jobs
        this.props.refresh();
    }


    render() {
        const items = this.props.items;
        return(
            <div className="search-jobs-filter-form">
                <div className="row">
                        {
                            items.map(item => (
                                <SearchDropdown item={item} handleChecked={this.handleChecked} />
                            ))
                        }
                        <div class="col-md-3">
                        <button type="button" class="btn btn-dark" onClick={this.handleSubmit}>Filter</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default connect()(Search);