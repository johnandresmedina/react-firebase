import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDhLdOWEWitM1Uuyb10Fl7k0uJo4dhjupg',
  authDomain: 'react-firebase-78e93.firebaseapp.com',
  databaseURL: 'https://react-firebase-78e93.firebaseio.com',
  projectId: 'react-firebase-78e93',
  storageBucket: 'react-firebase-78e93.appspot.com',
  messagingSenderId: '904270937669',
  appId: '1:904270937669:web:e95b24908c11a62080ad2c',
  measurementId: 'G-FQ3V8QVFF1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
