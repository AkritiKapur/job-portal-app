import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import logo from './logo.svg';
import { sampleAction } from './actions/sampleAction';
import './App.css';
import Dashboard from './candidateDashboard/Dashboard';
import Header from './header/header';
import Search from './search/search';
import SignupHolder from './authentication/SignupHolder';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'dashboard',
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="container-fluid">
          < SignupHolder />
          {/* <Search />
          <Tabs
            id="controlled-tab-home"
            activeKey={this.state.key}
            onSelect={key => this.setState({ key })}
          >
            <Tab eventKey="dashboard" title="Available Jobs">
              <Dashboard />
            </Tab>
            <Tab eventKey="applied" title="Applications">
              <Dashboard />
            </Tab>
          </Tabs> */}
        </div>
      </div>
    );
  }

//  sampleAction = (event) => {
//   this.props.sampleAction();
//  }

}

// const mapStateToProps = state => ({
//   ...state
//  })

//  const mapDispatchToProps = dispatch => ({
//   sampleAction: () => dispatch(sampleAction())
//  })


export default connect()(App);
//  export default connect(mapStateToProps, mapDispatchToProps)(App);
