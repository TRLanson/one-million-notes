import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderID: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementID: process.env.MEASUREMENTID,

}

const app = initializeApp(config);

export const db = getFirestore(app);
