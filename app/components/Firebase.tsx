import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderID: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementID: process.env.measurmentId,

}

const app = initializeApp(config);

export const db = getFirestore(app);
