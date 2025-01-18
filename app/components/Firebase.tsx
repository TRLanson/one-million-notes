import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  
}

console.log(config);

const app = initializeApp(config);

export const db = getFirestore(app);
