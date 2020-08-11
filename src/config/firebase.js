import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCK4vCMBOG8vPparmxM9joC1rlOP4Stv1M",
    authDomain: "react-mini-16338.firebaseapp.com",
    databaseURL: "https://react-mini-16338.firebaseio.com",
    projectId: "react-mini-16338",
    storageBucket: "react-mini-16338.appspot.com",
    messagingSenderId: "30534484303",
    appId: "1:30534484303:web:f3ceb7c4bd7026a30dc53a"
  };

firebase.initializeApp(firebaseConfig)


export default firebase;