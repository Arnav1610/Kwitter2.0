
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBpDhPb26f-xQzTcsAeldihB-eDbk8WMaA",
      authDomain: "kwitter-66c2d.firebaseapp.com",
      databaseURL: "https://kwitter-66c2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-66c2d",
      storageBucket: "kwitter-66c2d.appspot.com",
      messagingSenderId: "536855218181",
      appId: "1:536855218181:web:19b045168436a494e8f46c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
