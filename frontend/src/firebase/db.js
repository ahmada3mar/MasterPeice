import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAnsXd_15iE96cKYHLUB8siZ_uboxk2Fts",
    authDomain: "oca-master-piece.firebaseapp.com",
    projectId: "oca-master-piece",
    storageBucket: "oca-master-piece.appspot.com",
    messagingSenderId: "399587121611",
    appId: "1:399587121611:web:f2569ca1f8551e279ffe4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export  const db = firebase
 
//   const usersCollection = db.collection('users')
//   const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }


