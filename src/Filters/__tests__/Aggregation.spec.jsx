import React from 'react';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { IntlProvider } from 'react-intl';
import ReduxAggregation from '../Aggregation';
import renderer from 'react-test-renderer';

function setupSnapshot(initialAggs) {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore({
    query: {},
    aggs: {
      company_response: initialAggs
    }
  })

  return renderer.create(
    <Provider store={store}>
      <IntlProvider locale="en">
        <ReduxAggregation fieldName="company_response"/>
      </IntlProvider>
    </Provider>
  )
}

describe('initial state', () => {
  it('renders without crashing', () => {
    const target = setupSnapshot([
      {key: 'foo', doc_count: 99}
    ]);
    const tree = target.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

