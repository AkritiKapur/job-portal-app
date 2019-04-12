import React, { Component } from 'react';
import { connect } from 'react-redux';
import './search.css'

class Search extends Component {
    render() {
        return(
            <div class="row">
                <div class="col-md-6 search-bar">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </div>
        )
        
    }
}

export default connect()(Search);