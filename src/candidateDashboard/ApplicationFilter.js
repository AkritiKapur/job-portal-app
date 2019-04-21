import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import checkboxes from './Filter';

class ApplicationFilter extends Component {
    // https://medium.com/@wlodarczyk_j/handling-multiple-checkboxes-in-react-js-337863fd284e
    constructor(props, context) {
        super(props, context);
        this.state = checkboxes.reduce(function(map, obj) {
                map[obj.key] = true;
                return map;
            }, {});

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (event) => {
        const item = event.target.name;
        const isChecked = event.target.checked;

        this.setState({item: isChecked});
    }

    render() {
        const { checked } = this.state;

        return (
            <React.Fragment>
                {checkboxes.map(item => (
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={item.key} onChange={this.handleChange}/>
                        <label className="custom-control-label" for={item.key}>{item.label}</label>
                    </div>
                ))}
            </React.Fragment>
        );
    }

}

export default connect()(ApplicationFilter);