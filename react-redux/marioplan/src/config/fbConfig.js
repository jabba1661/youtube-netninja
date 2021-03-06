import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_h7BX4KI4MrbbgOrQ-iaPjzzUfvdtbZY",
  authDomain: "net-ninja-marioplan-cca4e.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-cca4e.firebaseio.com",
  projectId: "net-ninja-marioplan-cca4e",
  storageBucket: "net-ninja-marioplan-cca4e.appspot.com",
  messagingSenderId: "871044780715",
  appId: "1:871044780715:web:a8eeaf0cb57d31b0445dee",
  measurementId: "G-XDGW7ZKMER",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//^this might break - analyze later

//updates propert [timestampsInSnapshots]
//-- changes how firebase works with timestamps
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
