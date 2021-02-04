import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyARyESlwaUYOYyciM5Dt0Ji-QahRqcb8h0",
  authDomain: "slack-11fdb.firebaseapp.com",
  projectId: "slack-11fdb",
  storageBucket: "slack-11fdb.appspot.com",
  messagingSenderId: "31822093650",
  appId: "1:31822093650:web:0a18e408df872f46566e8b",
  measurementId: "G-4K4X8GCKC9"
};


const firebaseapp=firebase.initializeApp(firebaseConfig);

const db=firebaseapp.firestore();


const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();


export {auth,provider}
export default db