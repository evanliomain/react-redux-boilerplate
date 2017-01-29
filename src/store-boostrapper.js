import { createStore } from 'redux';

import reducers from './reducers';

export default function() {

  const store = createStore(reducers);

  // Hot Module Replacement API
  if (module.hot) {
    hotReload(store);
  }

  return store;
}


function hotReload(store) {
  module.hot.accept('./reducers/index', () => {
    store.replaceReducer(require('./reducers/index').default);
    store.dispatch({ type : 'RELOAD' });
  });
}
