var firebaseConfig = {
      apiKey: "AIzaSyDwHAF-RULeKbNToACYdWaZOs6bEuFziTM",
      authDomain: "kwitter-2-90c2e.firebaseapp.com",
      databaseURL: "https://kwitter-2-90c2e-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-90c2e",
      storageBucket: "kwitter-2-90c2e.appspot.com",
      messagingSenderId: "529925835134",
      appId: "1:529925835134:web:b6672242100f1df8b90b2f",
      measurementId: "G-BF9QTPTVB3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").Value;
          firebase.database().ref(room_name).push({
          name : user_name, 
          message : msg,
          like : 0
          });

          document.getElementById("msg").value = "" ;
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
