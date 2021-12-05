import { initializeApp, getApps } from 'firebase/app';
import { 
  initializeFirestore, collection, getDocs, query,
  doc, addDoc, deleteDoc, updateDoc, getDoc, setDoc, onSnapshot, where,  orderBy
} from "firebase/firestore";
import { firebaseConfig } from '../Secret';

let app;
if (getApps().length == 0){
  app = initializeApp(firebaseConfig);
} 
const db = initializeFirestore(app, {
  useFetchStreams: false
});

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
        onSnapshot(collection(db, 'TrackingList'), (qSnap) => {
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
        const trackingListRef = collection(db, 'TrackingList');
        await addDoc(trackingListRef, item);
        this.updateSubscribers();
    }

    async updateTime( key, newItem) {
        const trackingListRef = doc(db, 'TrackingList', key);
        console.log(key + newItem)
        let docRef = await setDoc(trackingListRef, newItem);
        this.updateSubscribers();
    }

    async deleteItem(key) {
        const docRef = doc(db, 'TrackingList', key);
        await deleteDoc(docRef);
        this.updateSubscribers();
    }

    async updateItem (key, newItem) {
      const docRef = doc(db, "TrackingList", key);
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
