import { initializeApp, getApps } from 'firebase/app';
import { 
  initializeFirestore, collection, getDocs, query,
  doc, addDoc, deleteDoc, updateDoc, getDoc, setDoc, onSnapshot, where,  orderBy
} from "firebase/firestore";
import { firebaseConfig } from '../Secret';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

let app;
if (getApps().length == 0){
  app = initializeApp(firebaseConfig);
} 
const db = initializeFirestore(app, {
  useFetchStreams: false
});

const auth = getAuth();

export async function login(email, password) {
    // try {
    await signInWithEmailAndPassword(auth, email, password);
    // } catch {
    //     alert("Error!");
    // }
}

export async function logout(){
    try {
        await signOut(auth)
    } catch {
        alert("Error!");
    }
}

class DataModel {

    constructor() {
        this.trackingList = [];
        this.subscribers = [];
        this.initlistOnSnapshot();
    }

    subscribeToUpdates(callback) {
        // console.log("new subscriber: ", callback);
        this.subscribers.push(callback);
    }

    updateSubscribers() {
        for (let sub of this.subscribers) {
          sub(); // just tell them there's an update
        }
    }

    initlistOnSnapshot() {
        let path = auth.currentUser.email + ' TrackingList'
        onSnapshot(collection(db, path), (qSnap) => {
          let trackingList = [];
          qSnap.forEach((docSnap) => {
            let item = docSnap.data();
            item.key = docSnap.id;
            trackingList.push(item);
          });
          this.trackingList = trackingList;
          this.updateSubscribers();
        });
    }

    async addItem(item) {
        let path = auth.currentUser.email + ' TrackingList'
        const trackingListRef = collection(db, path);
        await addDoc(trackingListRef, item);
        this.updateSubscribers();
    }

    async updateTime( key, newItem) {
        let path = auth.currentUser.email + ' TrackingList'

        const trackingListRef = doc(db, path, key);
        console.log(key + newItem)
        let docRef = await setDoc(trackingListRef, newItem);
        this.updateSubscribers();
    }

    async deleteItem(key) {
        let path = auth.currentUser.email + ' TrackingList'

        const docRef = doc(db, path, key);
        await deleteDoc(docRef);
        this.updateSubscribers();
    }

    async updateItem (key, newItem) {
        let path = auth.currentUser.email + ' TrackingList'

        const docRef = doc(db,path, key);
      await updateDoc(docRef, newItem);
    }

    getItem(key) {
        let idx = this.trackingList.findIndex((elem)=>elem.key===item.key);
        return(this.trackingList[idx]);
    }
    
    getTrackingList() {
        return this.trackingList;
    }

    getTrackingListCopy() {
        return Array.from(this.trackingList);
    }

}

let theDataModel;

export function getDataModel() {
  if (!theDataModel) {
    theDataModel = new DataModel();
  }
  return theDataModel;
}
