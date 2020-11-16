import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDyIKPMaPOlhMqGXe8jMrnDoNCmr2TR-DM',
  authDomain: 'clubhub-70d42.firebaseapp.com',
  databaseURL: 'https://clubhub-70d42.firebaseio.com',
  projectId: 'clubhub-70d42',
  storageBucket: 'clubhub-70d42.appspot.com',
  messagingSenderId: '93281243522',
  appId: '1:93281243522:ios:b875e382b98f10c0673f9b',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };