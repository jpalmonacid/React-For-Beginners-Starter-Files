import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCAp3CJj1_QnmCPf2ty62Jobi6E2xnq_D4",
  authDomain: "catch-of-the-day-jpa.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jpa.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
