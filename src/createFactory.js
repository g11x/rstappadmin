import {createFactory} from 'react';

export default Component => {
  const Factory = createFactory(Component);
  Factory.component = Component;
  return Factory;
};
