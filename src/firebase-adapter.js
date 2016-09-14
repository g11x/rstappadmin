import {initializeApp} from 'firebase/app';
import auth from 'firebase/auth';
import database from 'firebase/database';

import {setIsLoggedIn, setUnauthorized} from './actions/auth';
import {clearCurrentUser, setUsers} from './actions/users';
import {setNotifications} from './actions/notifications';

export default (store) => {
  if (process.env.NODE_ENV === 'development')
    initializeApp({
      apiKey: 'AIzaSyANWoSqMEvav1BfmbkRGutHY7gs33vWHeI',
      authDomain: "checklistappdev.firebaseapp.com",
      databaseURL: "https://checklistappdev.firebaseio.com",
      storageBucket: "checklistappdev.appspot.com",
    });
  else
    initializeApp({
      apiKey: "AIzaSyAVx3bI-rgnX2OogCiZRcWNSfEHu5DobR0",
      authDomain: "rst-checklist.firebaseapp.com",
      databaseURL: "https://rst-checklist.firebaseio.com",
      storageBucket: "rst-checklist.appspot.com",
    });

  store.subscribe(() => {
    const state = store.getState() || {auth: {}, users: {}};
    if (state.auth.isLoggedIn && !Object.keys(state.users).length) {
      database().ref(`users/${state.auth.uid}`).set({
        uid: state.auth.uid,
        email: state.auth.email,
        avi: state.auth.providerData[0].photoURL,
        displayName: state.auth.providerData[0].displayName,
      });
    }
  });

  auth().onAuthStateChanged(fbUser => {
    if (!fbUser || !fbUser.email)
      store.dispatch(setIsLoggedIn(false));
    else
      store.dispatch(setIsLoggedIn(true, fbUser.uid, fbUser.email,
            fbUser.providerData));
  });

  database().ref('users').on('value', function(snapshot) {
    const users = snapshot.val();
    if (users)
      store.dispatch(setUsers(users));
    else
      store.dispatch(clearCurrentUser());
  });

  database().ref('notifications').on('value', function(snapshot) {
    store.dispatch(setNotifications(snapshot.val()));
  });

  database().ref('authorizations/unauthorized').on('value', function(snapshot) {
    store.dispatch(setUnauthorized(snapshot.val()));
  });
};
