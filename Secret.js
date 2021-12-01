import {getApps, initializeApp} from 'firebase/app';
import {initializeFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6f6GlqaBxGj78i01N6V-hKF-ZXIrGqiI",
    authDomain: "time-tracking-final.firebaseapp.com",
    projectId: "time-tracking-final",
    storageBucket: "time-tracking-final.appspot.com",
    messagingSenderId: "62448176209",
    appId: "1:62448176209:web:dc4bec586cbd8285b7fc70"
  };
  

let app;
if (getApps().length == 0){
    app = initializeApp(firebaseConfig);
}
export const db = initializeFirestore(app, {
    useFetchStreams: false
});

