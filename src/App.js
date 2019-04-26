/**
 * App component
 * Main entry point of the App
 *
 * @version 1.0.1
 * @author [Akriti Kapur](https://github.com/AkritiKapur)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './header/header';
import SignupHolder from './authentication/SignupHolder';
import Home from './candidateDashboard/Home';
import CompanyHome from './companyDashboard/Home';
import PrivateRoute from './authentication/PrivateRouter';
import history from './utils/history';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isCompany: false
    }

    this.refresh = this.refresh.bind(this);
  
  }

  /**
   * Only called when the App loads
   * This is used to generate role based flow.
   */
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({isCompany: !!user && user.isCompany});
    // this.fetchJobs(requestOptions);
  }

  refresh() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({isCompany: !!user && user.isCompany});
  }


  render() {
    const home = this.state.isCompany ? <PrivateRoute exact path="/" component={CompanyHome} /> : <PrivateRoute exact path="/" component={Home} />

    return (
      <div className="App">
        <Router history={history}>
        <Header />
        <div className="container-fluid">
            {home}
            <Route path="/login" render={(props) => <SignupHolder {...props} refresh={this.refresh}/>} />
        </div>
        </Router>
      </div>
    );
  }

}


export default connect()(App);
//  export default connect(mapStateToProps, mapDispatchToProps)(App);
