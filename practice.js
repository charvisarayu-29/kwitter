
var firebaseConfig = {
    apiKey: "AIzaSyBdWxyVhRXJkFdGpp8Fk7NLyBWaqfBAQ1c",
    authDomain: "practice-activity-2a88b.firebaseapp.com",
    databaseURL: "https://practice-activity-2a88b-default-rtdb.firebaseio.com",
    projectId: "practice-activity-2a88b",
    storageBucket: "practice-activity-2a88b.appspot.com",
    messagingSenderId: "466384730888",
    appId: "1:466384730888:web:945a6f330ac8a23d51cabd",
    measurementId: "G-31NJQM5CK4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }