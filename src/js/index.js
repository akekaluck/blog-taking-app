import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute, IndexRoute, browserHistory, Redirect} from 'react-router';
import { routerMiddleware } from 'react-router-redux'

//Middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Meterial-ui and touch event
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//Src
import reducer from './reducers';
import Layout from './components/layout';
import BlogList from './components/bloglist';
import BlogScreen from './components/blogscreen';
import BlogEdit from './components/blogedit';

//Load style
require('../less/style.less');

const store = createStore(reducer,
  applyMiddleware(logger(), routerMiddleware(browserHistory), thunk)
);

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

const App = () => (
  <Provider store= { store }>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Layout} >
          <IndexRoute component={BlogList} />
          <Route path="screen" component={BlogScreen} />
          <Route path="edit" component={BlogEdit} />
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
