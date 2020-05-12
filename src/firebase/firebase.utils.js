import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBjzmbrnM2Ko4z9P1Ajuscx6P5B7EKF9nY',
  authDomain: 'crwn-clothing-900b7.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-900b7.firebaseio.com',
  projectId: 'crwn-clothing-900b7',
  storageBucket: 'crwn-clothing-900b7.appspot.com',
  messagingSenderId: '221643824087',
  appId: '1:221643824087:web:0e812ad2ff0d9216da4992',
  measurementId: 'G-B2M8JX8SXC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
