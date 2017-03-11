import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute, IndexRoute, browserHistory, Redirect} from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

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


// import BlogList from './components/bloglist';
// import BlogScreen from './components/blogscreen';
// import BlogEdit from './components/blogedit';

//Load initial Actions
// import { init as initBlogList } from './components/bloglist/actions';
// import { init as initBlogScreen } from './components/blogscreen/actions';
// import { init as initBlogEdit } from './components/blogedit/actions';

//Load style
require('../less/style.less');

const store = createStore(reducers,
  applyMiddleware(logger(), routerMiddleware(browserHistory), thunk)
);

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
