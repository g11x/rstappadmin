const auth = (state = {isLoggedIn: null}, action) => {
  if (action.type === 'SET_IS_LOGGED_IN')
    state = {
      ...state,
      isLoggedIn: action.isLoggedIn,
      uid: action.uid,
      email: action.email,
      providerData: action.providerData,
    };

  if (action.type === 'UNAUTHORIZED')
    state = {
      ...state,
      unauthorizedMessage: action.message
    };

  return state;
};

export default auth;
