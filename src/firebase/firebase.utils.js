import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiemEuF2xmZlgTqHEXnyWB0AhSKzLM7CY",
    authDomain: "vive-le-roi-db.firebaseapp.com",
    databaseURL: "https://vive-le-roi-db.firebaseio.com",
    projectId: "vive-le-roi-db",
    storageBucket: "vive-le-roi-db.appspot.com",
    messagingSenderId: "241824657285",
    appId: "1:241824657285:web:c070f013fe02d8683fdeec"
  };

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
