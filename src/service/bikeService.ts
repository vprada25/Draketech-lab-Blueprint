import { collection, getDocs } from 'firebase/firestore/lite'
import { dbFirebase } from '../Api/firebase'


export const getData = async () => {
  const bikes = collection(dbFirebase, 'bikes');
  const bikesSnapshot = await getDocs(bikes);
  return bikesSnapshot.docs.map(doc => doc.data());
} 