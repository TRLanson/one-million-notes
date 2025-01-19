import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {

}

const app = initializeApp(config);

export const db = getFirestore(app);
