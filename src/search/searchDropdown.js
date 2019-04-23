import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './search.css';


class SearchDropdown extends Component {
    
    render() {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ];

        return(
            <div className="col-md-4 search-bar">
                <Select options={options} isMulti/>
            </div>
        )
        
    }
}

export default connect()(SearchDropdown);