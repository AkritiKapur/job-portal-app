import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { sampleAction } from './actions/sampleAction';
import './App.css';

class App extends Component {
 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <pre>
        {
          JSON.stringify(this.props)
        }
    </pre>
    <button onClick={this.sampleAction}>Test redux action</button>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
   </div>
  );
 }

 sampleAction = (event) => {
  this.props.sampleAction();
 }

}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  sampleAction: () => dispatch(sampleAction())
 })



 export default connect(mapStateToProps, mapDispatchToProps)(App);
