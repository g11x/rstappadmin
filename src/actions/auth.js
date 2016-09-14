import auth from 'firebase/auth';

/** Set whether the user is logged in to Firebase
 *
 * @param isLoggedIn {bool} true if the user is logged in, false if not, null
 * otherwise
 * @param email {String} user's email. only required if `isLoggedIn === true`
 * @returns {Object} an action of type `SET_IS_LOGGED_IN`
 */
export const setIsLoggedIn = (isLoggedIn, uid, email, providerData = {}) => ({
  type: 'SET_IS_LOGGED_IN',
  isLoggedIn,
  uid,
  email,
  providerData,
})

/** Sign in to Google with Firebase via redirect
 *
 * ...this function isn't pure so sue me.
 */
export const redirectToGoogleLogin = () => {
  auth().signInWithRedirect(new auth.GoogleAuthProvider());

  // this may run, but the page will soon redirect anyway
  return {type: 'REDIRECT_TO_GOOGLE_LOGIN'};
};

export const setUnauthorized = (message) => {
  return {type: 'UNAUTHORIZED', message};
};
