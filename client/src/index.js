import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css';
import App from './App';
import Help from './components/Help';
import Ask from './components/Ask'
import List from './components/List'
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route component={App}/>
        <Route exact path="/" component={Help}/>
        <Route exact path="/ask" component={Ask}/>
        <Route exact path="/list" component={List}/>
      </div>
    </Router>
  </Provider>
)

/*
<Route exact path="/list" component={List}/>
<Route exact path="/list/:id" component={Item}/>
<Route exact path="/dashboard" component={Dashboard}/>
*/

Root.propTypes = {
  store: PropTypes.object.isRequired
}


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
