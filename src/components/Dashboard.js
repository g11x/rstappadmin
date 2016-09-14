import {DOM} from 'react';

import createFactory from '../createFactory';

const {div, h2, p, section} = DOM;

export default createFactory((pending, sent) =>
    section({className: 'container px2 py3'},
      div({className: 'clearfix mxn2'},
        div({className: 'sm-col sm-col-6 px2'},
          h2({className: 'h2'}, 'Blerg'),
          p(null, 'spazzze')),
        div({className: 'sm-col sm-col-6 px2'},
          h2({className: 'h2'}, 'Blarg'),
          p(null, 'spazzze')))));
