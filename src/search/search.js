import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import SearchDropdown from './searchDropdown';

class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.props.items.reduce(function(map, obj) {
            map[obj.key] = [];
            return map;
        }, {submitted: false});

    }

    render() {
        const items = this.props.items;
        return(
            <div className="row">
            {
                items.map(item => (
                    <SearchDropdown item={item} />
                ))
            }
            </div>
        )
    }
}

export default connect()(Search);