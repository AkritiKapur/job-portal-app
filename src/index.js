import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import Dashboard from './candidateDashboard/Dashboard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
  <Dashboard />
 </Provider>,
 document.getElementById('root')
);
serviceWorker.unregister();
