import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute, IndexRoute, browserHistory, Redirect} from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';

import * as storage from 'redux-storage';

//Middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Meterial-ui and touch event
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//Src
import reducers from './pages/reducers';

import Layout from './components/layout';
import Home from './pages/home';
import DetailPage from './pages/detail';
import EditPage from './pages/edit';

// Local storage setup
const storageReducer = storage.reducer(reducers);

import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('ABlog_post');
const storagemiddleware = storage.createMiddleware(engine,['@@router/LOCATION_CHANGE']);

//Load style
require('../less/style.less');

const store = createStore(storageReducer,
  applyMiddleware(logger(), routerMiddleware(browserHistory),
    thunk, storagemiddleware)
);

const load = storage.createLoader(engine);
load(store);

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store= { store }>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={Layout} >
          <IndexRoute component={Home} />
          <Route path="screen/:id" component={DetailPage} />
          <Route path="add" component={EditPage} />
          <Route path="edit/:id" component={EditPage}/>
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
