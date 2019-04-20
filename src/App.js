import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './header/header';
import SignupHolder from './authentication/SignupHolder';
import Home from './candidateDashboard/Home';
import PrivateRoute from './authentication/PrivateRouter';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="container-fluid">
          <Router>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={SignupHolder} />
          </Router>
        </div>
      </div>
    );
  }

}


export default connect()(App);
//  export default connect(mapStateToProps, mapDispatchToProps)(App);
