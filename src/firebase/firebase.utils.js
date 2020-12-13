import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFl2DRcmHYx1bhdbv2xkCb0QLUyh_pvk8",
    authDomain: "crown-clothing-ff1da.firebaseapp.com",
    projectId: "crown-clothing-ff1da",
    storageBucket: "crown-clothing-ff1da.appspot.com",
    messagingSenderId: "431556373687",
    appId: "1:431556373687:web:ed0e4ffb2676abba35f132",
    measurementId: "G-1RFQNMWFC3"
};

export const createUsersProfileDocument = async (authUser, additionalData) => {

    if(!authUser) return;

    const userRef = firestore.doc(`users/${authUser.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;
