React, Redux & Firebase App Tutorial #15 - Creating a Firebase Project

https://www.youtube.com/watch?v=z0QpTl5-0Bk&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=15

1. go to "your firebase projects", and select "Add project"
   project called "net-ninja-marioplan" , it automatically creates a project id: "net-ninja-marioplan-cca4e"
2. , configure google analytics: "degault account for firebase"
   -- firebase project created
3. register ap, called app "app-net-ninja-marioplan"
   //code snippet from firebase

      <!-- The core Firebase JS SDK is always required and must be listed first -->
      <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_h7BX4KI4MrbbgOrQ-iaPjzzUfvdtbZY",
    authDomain: "net-ninja-marioplan-cca4e.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-cca4e.firebaseio.com",
    projectId: "net-ninja-marioplan-cca4e",
    storageBucket: "net-ninja-marioplan-cca4e.appspot.com",
    messagingSenderId: "871044780715",
    appId: "1:871044780715:web:a8eeaf0cb57d31b0445dee",
    measurementId: "G-XDGW7ZKMER"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

the net-ninja video copies this in buffer:
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyC_h7BX4KI4MrbbgOrQ-iaPjzzUfvdtbZY",
authDomain: "net-ninja-marioplan-cca4e.firebaseapp.com",
databaseURL: "https://net-ninja-marioplan-cca4e.firebaseio.com",
projectId: "net-ninja-marioplan-cca4e",
storageBucket: "net-ninja-marioplan-cca4e.appspot.com",
messagingSenderId: "871044780715",
appId: "1:871044780715:web:a8eeaf0cb57d31b0445dee",
measurementId: "G-XDGW7ZKMER"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

4. npm i firebase

5. Create database
