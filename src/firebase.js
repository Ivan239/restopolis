import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAplVWdMzjCA2PZNwdHZGB74HNFJ-Qs0AE',
  authDomain: 'restopolis-1627a.firebaseapp.com',
  databaseURL: 'https://restopolis-1627a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'restopolis-1627a',
  storageBucket: 'restopolis-1627a.appspot.com',
  messagingSenderId: '930666694842',
  appId: '1:930666694842:web:6ad80280440bfa34fbda83',
  measurementId: 'G-T4JREE16SK',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
