import {connect} from 'react-redux';

import {redirectToGoogleLogin} from '../actions/auth';
import App from '../components/App';
import createFactory from '../createFactory';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  unauthorizedMessage: state.auth.unauthorizedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onLogInClick: () => dispatch(redirectToGoogleLogin()),
});

export default createFactory(connect(mapStateToProps, mapDispatchToProps)(App));
