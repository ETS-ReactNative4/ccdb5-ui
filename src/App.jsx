// Required so that the expose-loader test works which moves the ReactDOM
// variable into the global space
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import React from 'react';
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import reducers from './reducers'
import FilterPanel from './FilterPanel';
import Hero from './Hero';
import SearchPanel from './SearchPanel';
import ResultsPanel from './ResultsPanel';
import UrlBarSynch from './UrlBarSynch';
import './App.less';

const middleware = [thunkMiddleware];

const composeEnhancers = composeWithDevTools({
  // required for redux-devtools-extension
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

// required format for redux-devtools-extension
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));


export class SearchComponents extends React.Component {
  render() {
    return (
      <IntlProvider locale="en">
        <main className="content content__1-3" role="main">
          <UrlBarSynch />
          <Hero />
          <div className="content_wrapper">
            <SearchPanel />
            <aside className="content_sidebar">
              <FilterPanel />
            </aside>
            <ResultsPanel className="content_main" />
          </div>
        </main>
      </IntlProvider>
    )
  }
}

export class DetailComponents extends React.Component {
  render() {
    return (
      <div>
        <p>ID = {this.props.match.params.id}</p>
      </div>
    )
  }
}

export class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={SearchComponents}/>
            <Route path="/detail/:id" component={DetailComponents}/>
          </div>
        </Router>

      </Provider>
    );
  }
}
