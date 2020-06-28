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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{

        await userRef.set({displayName, email, createdAt,...additionalData});

      }catch(exception){
        console.log('error creating user', exception.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;