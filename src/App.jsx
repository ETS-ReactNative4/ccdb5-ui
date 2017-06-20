// Required so that the expose-loader test works which moves the ReactDOM
// variable into the global space
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { getComplaints } from './actions/complaints'
import reducers from './reducers'
import FilterPanel from './FilterPanel';
import Hero from './Hero';
import SearchBar from './SearchBar';
import ResultsPanel from './ResultsPanel';
import './App.less';

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
);

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

export class App extends React.Component {
  componentDidMount() {
    store.dispatch(getComplaints())
  }

  render() {
    return (
      <Provider store={store}>
        <main className="content content__1-3" role="main">
          <Hero />
          <div className="content_wrapper">
            <SearchBar />
            <aside className="content_sidebar">
              <FilterPanel />
            </aside>
            <ResultsPanel className="content_main" />
          </div>
        </main>
      </Provider>
    );
  }
}
