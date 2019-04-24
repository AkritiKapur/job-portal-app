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

    handleChecked(filterName, values) {
        this.props.handleFilter(filterName, values);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
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