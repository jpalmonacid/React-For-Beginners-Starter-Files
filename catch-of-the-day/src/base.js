import Rebase from 're-base';
import firebase from 'firebase';

const { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_DB_URL } = process.env;
console.log(process.env);

const firebaseApp = firebase.initializeApp({
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DB_URL
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
