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
import Ask from './components/Ask'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {app} from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(app);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/ask" component={Ask}/>

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
