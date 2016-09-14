import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux';

import auth from './auth';
import notifications from './notifications';
import users from './users';

const app = combineReducers({auth, notifications, routing, users});

export default app;
