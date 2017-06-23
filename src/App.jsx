// Required so that the expose-loader test works which moves the ReactDOM
// variable into the global space
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import React from 'react';
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import FilterPanel from './FilterPanel';
import Hero from './Hero';
import SearchBar from './SearchBar';
import ResultsPanel from './ResultsPanel';
import UrlBarSynch from './UrlBarSynch';
import './App.less';

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
);

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <main className="content content__1-3" role="main">
            <UrlBarSynch />
            <Hero />
            <div className="content_wrapper">
              <SearchBar />
              <aside className="content_sidebar">
                <FilterPanel />
              </aside>
              <ResultsPanel className="content_main" />
            </div>
          </main>
        </IntlProvider>
      </Provider>
    );
  }
}
