import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCuiKTcyZP0GBRQjg19I7kDTcEmicdir1Y',
  authDomain: 'deadline-407318.firebaseapp.com',
  projectId: 'deadline-407318',
  storageBucket: 'deadline-407318.appspot.com',
  messagingSenderId: '228978164571',
  appId: '1:228978164571:web:c6108d3d0fd657e368907e',
  measurementId: 'G-QJTRQ3H043',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();

export const db = getFirestore(app);
