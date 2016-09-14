import {createFactory} from 'react';
import {render} from 'react-dom';
import {Provider as ProviderComponent} from 'react-redux';
import {
  Router as RouterComponent,
  Route as RouteComponent,
  browserHistory
} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {createStore} from 'redux';
import 'basscss/css/basscss.css';

import connectStoreToFirebase from './firebase-adapter';
import app from './reducers';
import StatefulApp from './containers/StatefulApp';

const Provider = createFactory(ProviderComponent);
const Router = createFactory(RouterComponent);
const Route = createFactory(RouteComponent);

const store = createStore(app);
const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV === 'development')
  window.store = store;

connectStoreToFirebase(store);

render(
    Provider({store},
      Router({history},
        Route({path: '/', component: StatefulApp.component}))),
    document.getElementById('root'));
