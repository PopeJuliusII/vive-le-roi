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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
