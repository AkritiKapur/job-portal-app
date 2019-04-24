import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './search.css';

class SearchDropdown extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected) {
        const value = selected.map(item => item.value);
        const name = this.props.item.key;
        this.props.handleChecked(name, value);
    }
    
    render() {
        const options = this.props.item.data.map(val => (
            {value: val, label:val}
        ));
        const name = this.props.item.key;

        return(
            <div className="col-md-4 search-bar">
                <Select name={name} options={options} onChange={this.handleChange} isMulti/>
            </div>
        )
        
    }
}

export default connect()(SearchDropdown);