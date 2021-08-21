import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAw_r1EdPB1FNlY378ooQk3kFAF90bmYdQ",
    authDomain: "linkedin-clone-6cc53.firebaseapp.com",
    projectId: "linkedin-clone-6cc53",
    storageBucket: "linkedin-clone-6cc53.appspot.com",
    messagingSenderId: "1042646711789",
    appId: "1:1042646711789:web:d391d5d18bf713a28d7be4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}