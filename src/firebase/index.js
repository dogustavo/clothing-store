import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCB0p_TcMoVJMBmEjYAJBVZGmgKVo6O_LM",
    authDomain: "crwn-db-885e7.firebaseapp.com",
    databaseURL: "https://crwn-db-885e7.firebaseio.com",
    projectId: "crwn-db-885e7",
    storageBucket: "crwn-db-885e7.appspot.com",
    messagingSenderId: "91388251091",
    appId: "1:91388251091:web:ba48275d29ed1fac9d3d26",
    measurementId: "G-H6GYNBW632"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;