import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEQSK1FiMj9XtfjxyAfyBa6udVpItTeHI",
    authDomain: "crwn-db-e3c36.firebaseapp.com",
    databaseURL: "https://crwn-db-e3c36.firebaseio.com",
    projectId: "crwn-db-e3c36",
    storageBucket: "crwn-db-e3c36.appspot.com",
    messagingSenderId: "938619038961",
    appId: "1:938619038961:web:b55387619960ecef488d50",
    measurementId: "G-YB2M4JVJZR"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;