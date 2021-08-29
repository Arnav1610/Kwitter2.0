
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const config = {
      apiKey: "AIzaSyBgjwM6JBZvBAMm3W97KwyNVJem4be7U-I",
      authDomain: "fancy-kwitter.firebaseapp.com",
      projectId: "fancy-kwitter",
      storageBucket: "fancy-kwitter.appspot.com",
      messagingSenderId: "906233040765",
      appId: "1:906233040765:web:94bb42732bc9730a45c614"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
