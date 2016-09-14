import {DOM} from 'react';

import createFactory from '../createFactory';

const {a, div, nav} = DOM;

export default createFactory(() =>
  nav({className: 'clearfix white bg-black'},
    div({className: 'sm-col'},
      a({href: '/'}, 'RST Checklist Admin'))));
