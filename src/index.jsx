/* global module, require, process */

import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { App }          from './components/App';
import storeBoostrapper from './store-boostrapper';

const store = storeBoostrapper();

window.onload = () => renderComponent(App, store);

// Hot Module Replacement API
if ('production' !== process.env.NODE_ENV && module.hot) {
  module.hot.accept('./components/App', () => hotReload(store));
}


function hotReload(storeInstance) {
  module.hot.accept('./components/App', () => renderComponent(
    require('./components/App').App,
    storeInstance
  ));
}

function renderComponent(Component, storeInstance) {
  if ('production' === process.env.NODE_ENV) {
    return render(
      <Provider store={storeInstance}>
        <Component />
      </Provider>,
      document.getElementById('app')
    );
  }
  return render(
    <AppContainer>
      <Provider store={storeInstance}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}
