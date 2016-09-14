import {DOM} from 'react';

import StatefulDashboard from '../containers/StatefulDashboard';
import createFactory from '../createFactory';
import Navbar from './Navbar';

const {button, div, h1, header, p} = DOM;

export default createFactory(
  ({isLoggedIn, unauthorizedMessage, onLogInClick}) =>
    div({style: {fontFamily: 'Helvetica, sans'}},
      Navbar(),

      isLoggedIn == null?
        div({className: 'p2'}, 'Loading...') :

      isLoggedIn === false?
        header({className: 'center px3 py4 white bg-gray bg-cover bg-center'},
          h1(null, 'RST Checklist'),
          p({className: 'h3'}, 'Administration'),
          button({type: 'button', className: 'h3 btn btn-primary mb4'},
            'Log in')) :

      unauthorizedMessage != null?
        div({className: 'p2'}, unauthorizedMessage) :

      // else
        StatefulDashboard()));
