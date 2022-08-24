var firebaseConfig = {
      apiKey: "AIzaSyDgZ5Cv8lBYqs0VQe07sSCs3DUadlPeKes",
      authDomain: "kwitter-a3f5c.firebaseapp.com",
      databaseURL: "https://kwitter-a3f5c-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3f5c",
      storageBucket: "kwitter-a3f5c.appspot.com",
      messagingSenderId: "922437164933",
      appId: "1:922437164933:web:2d4b5332e6897055106eec"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
