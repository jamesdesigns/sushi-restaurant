import Rebase from 're-base';
// import firebase from 'firebase';
import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyBl1HbfHgzqE25M3d0841AY1lZkgSo17Xw",
    authDomain: "sushi-james-hooper.firebaseapp.com",
    databaseURL: "https://sushi-james-hooper-default-rtdb.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;