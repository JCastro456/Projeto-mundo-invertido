import { addDoc, collection, getFirestore, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from './firebase.js'

export async function subscribeToHellfireClube(subscribe) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubCollection, subscribe)
    return docRef.id
}

export async function getHellfireClubSubscriptions(){
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'helfire-clube')
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
    const subscriptions = hellfireClubCollection.docs.map(doc => doc.data());
    return subscriptions;
}
