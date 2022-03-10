import firebase from  'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2bt1OF1QT0gC9LLLW6k-26ceYvsoBfv8",
    authDomain: "linkedin-clone-8f450.firebaseapp.com",
    projectId: "linkedin-clone-8f450",
    storageBucket: "linkedin-clone-8f450.appspot.com",
    messagingSenderId: "507368081789",
    appId: "1:507368081789:web:62e6310afcb95efb986414",
    measurementId: "G-LPK1TV8R61"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider, storage};
  export default db