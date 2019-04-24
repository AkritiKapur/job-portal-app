import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDropdown from './searchDropdown';

class Search extends Component {
    constructor(props, context) {
        super(props, context);


        this.state = this.props.items.reduce(function(map, obj) {
            map[obj.key] = []
            return map;
        }, {submitted: false});

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(filterName, values) {
        this.setState({[filterName]: values});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
    }


    render() {
        const items = this.props.items;
        return(
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
        )
    }
}

export default connect()(Search);