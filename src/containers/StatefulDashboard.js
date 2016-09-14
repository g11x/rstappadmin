import {connect} from 'react-redux';

import createFactory from '../createFactory';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => ({
  pending: state.pending,
  sent: state.sent,
});

export default createFactory(connect(mapStateToProps)(Dashboard));
