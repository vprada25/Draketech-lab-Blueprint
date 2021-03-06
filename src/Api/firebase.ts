import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

import { FIREBASE_CONFIG } from '../utils/config'

const firebase = initializeApp(FIREBASE_CONFIG)

export const dbFirebase = getFirestore(firebase)